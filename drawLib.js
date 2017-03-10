/** Copyright (c) 2017 Guillaume Martigny - MIT License - v0.1.0 */

/**
 * Lends useful functions for the project
 * @type {Object}
 */
var Utils = {
    PI: Math.PI,
    abs: Math.abs,
    sin: Math.sin,
    cos: Math.cos,
    max: Math.max,
    min: Math.min,
    sq: function(x) {
        return Math.pow(x, 2);
    },
    sqrt: Math.sqrt,
    rand: Math.random,
    floor: function(x) {
        return x | 0;
    },
    round: function(x) {
        return this.floor(x + .5);
    },
    ceil: function(x) {
        return this.floor(x + 1);
    },
    random: function(max) {
        return this.round(this.rand() * max);
    },
    noop: function() {},
    /**
     * Create a class prototype from a parent
     * @param {Function} self - An class needing a prototype
     * @param {Function} parent - A parent to draw prototype from
     * @param {Object} override - A map like object with overrides
     */
    extends: function(self, parent, override) {
        if (parent) {
            self.prototype = Object.create(parent.prototype);
            self.prototype.constructor = self;
        }
        if (override) {
            for (var func in override) {
                if (override.hasOwnProperty(func)) {
                    if (self.prototype[func]) {
                        self.prototype["_" + func] = self.prototype[func];
                    }
                    self.prototype[func] = override[func];
                }
            }
        }
    },
    /**
     * Throw an exception if an array is too short (used for arguments length)
     * @param {Array} array The array to mesure
     * @param {Number} asserted The minimal asserted length
     * @throws {TypeError} An error if array is too short
     */
    assertLength: function(array, asserted) {
        if (array.length < asserted) {
            throw new TypeError("Awaiting at least " + asserted + " arguments, only found " + array.length);
        }
    }
};

/**
 * Modify a position with a constant function
 * @param {Function} func - A function to call for each iteration
 * @constructor
 */
function Animation(func) {
    this.iteration = 0;
    this.func = func;
}

Utils.extends(Animation, null, {
    /**
     * Apply this animation function to a position
     * @param {Position} position - A position to move
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     */
    run: function(position, ctx) {
        this.func.call(position, this.iteration++, ctx);
    },
    /**
     * Restart this animation
     * @param {Position} position - A position to set
     */
    restart: function(position) {
        this.iteration = 0;
        position.reset();
    }
});

/**
 * Give an animation for swirling
 * @param {Number} radius - Radius of the swirling
 * @param {Number} [speed=0.1] - Speed ratio of the animation
 * @param {Boolean} [counterClockWise=false] - Swirl counter clockwise
 * @return {Animation}
 * @static
 */
Animation.Swirl = function(radius, speed, counterClockWise) {
    Utils.assertLength(arguments, 1);
    speed = speed || .1;
    return new Animation(function(i) {
        var rotation = counterClockWise ? i * speed : -i * speed;
        this.setX(this.origin.x + Utils.sin(rotation) * radius);
        this.setY(this.origin.y + Utils.cos(rotation) * radius);
    });
};

/**
 * Give an animation for rotation
 * @param {Number} [speed=0.1] - Speed ratio of the animation
 * @param {Boolean} [counterClockWise=false] - Rotate counter clockwise
 * @return {Animation}
 * @static
 */
Animation.Rotate = function(speed, counterClockWise) {
    speed = speed || .1;
    return new Animation(function(i, ctx) {
        ctx.translate(this.getX(), this.getY());
        var rotation = counterClockWise ? -i * speed : i * speed;
        ctx.rotate(rotation);
        ctx.translate(-this.getX(), -this.getY());
    });
};

/**
 * Give an animation of gravity simulation
 * @param {Number} [ground] - Value where position bounce
 * @param {Number} [bounce=0.3] - Vertical restitution of bounce (0 = no bounce, 1 = infinite bounce)
 * @return {Animation}
 * @static
 */
Animation.Gravity = function(ground, bounce) {
    bounce = bounce === undefined ? .3 : bounce;
    return new Animation(function(i, ctx) {
        ground = ground || ctx.canvas.height;
        if (this.getY() >= ground && i > 0) {
            this.setY(ground);
            this.animation.iteration = Utils.floor(-i * bounce);
        } else {
            this.addY(.09 * i);
        }
    });
};

/**
 * @typedef {Object} GradientParams
 * @param {...Number} [0-100] - A color stop, key for the position and value for the color
 * @example { 0: "red", 50: "green", 100: "blue" }
 */
/**
 * A generic background class
 * @param {String} color - Any color string
 * @constructor
 */
function Background(color) {
    Utils.assertLength(arguments, 1);
    this.style = color;
    this.animation = null;
}

Utils.extends(Background, null, {
    /**
     * Return the current style of this background
     * @returns {String}
     * @memberOf Background#
     */
    getStyle: function() {
        if (this.animation) {
            this.animation.run();
        }
        return this.style;
    },
    /**
     * Add an animation to this background
     * @param {Animation} animation - Any animation
     */
    animateWith: function(animation) {
        this.animation = animation;
    },
    /**
     * Get CSS string for this background
     * @returns {String}
     */
    getCSS: function() {
        return this.getStyle();
    }
});

/**
 *
 * @extends Background
 * @param {String} url -
 * @param {String} fill -
 * @constructor
 */
function BackgroundImage(url, fill) {
    this.image = new Image();
    this.image.src = url;
    this.fill = fill;
}

/**
 *
 * @enum {String}
 * @readonly
 */
BackgroundImage.fillType = {
    noRepeat: "no-repeat",
    repeat: "repeat",
    repeatX: "repeat-x",
    repeatY: "repeat-y",
    stretch: "stretch"
};

Utils.extends(BackgroundImage, Background, {
    /**
     * Build the pattern
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @param {Shape} shape - The holding shape
     * @return {CanvasPattern} The pattern or null if the image is not loaded
     * @memberOf BackgroundImage#
     */
    getStyle: function(ctx, shape) {
        var pattern = null;
        if (this.image.width) {
            pattern = ctx.createPattern(this.image, this.fill);
        }
        this.style = pattern;
        return this._getStyle();
    }
});

/**
 * A linear gradient background
 * @extends Background
 * @param {Number} [angle=0] - The gradient orientation
 * @param {GradientParams} params - The gradient definition
 * @constructor
 */
function LinearGradient(angle, params) {
    if (isNaN(+angle) && LinearGradient.orientation[angle] !== undefined) {
        angle = LinearGradient.orientation[angle];
    }
    this.angle = +angle || 0;
    this.params = params;
}

/**
 * Enum for linear gradient orientation
 * @enum {Number}
 * @readonly
 */
LinearGradient.orientation = {
    toRight: 0,
    toBottomRight: 45,
    toBottom: 90,
    toBottomLeft: 135,
    toLeft: 180,
    toTopRight: -45,
    toTop: -90,
    toTopLeft: -135
};

Utils.extends(LinearGradient, Background, {
    /**
     * Build the gradient
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @param {Shape} shape - The holding shape
     * @return {CanvasGradient}
     * @memberOf LinearGradient#
     */
    getStyle: function(ctx, shape) {
        var width = shape.width() / 2;
        var height = shape.height() / 2;
        var posX = shape.position.getX();
        var posY = shape.position.getY();
        var xComp = Utils.cos(this.angle * Utils.PI / 180);
        var yComp = Utils.sin(this.angle * Utils.PI / 180);
        var gradient = ctx.createLinearGradient(posX - width * xComp, posY - height * yComp, posX + width * xComp, posY + height * yComp);
        for (var stop in this.params) {
            if (this.params.hasOwnProperty(stop)) {
                gradient.addColorStop(stop / 100, this.params[stop]);
            }
        }
        this.style = gradient;
        return this._getStyle();
    },
    /**
     *
     * @param {Shape|Scene} shape
     * @returns {string}
     * @memberOf LinearGradient#
     */
    getCSS: function(shape) {
        var css = "linear-gradient(" + (this.angle + 90) + "deg, ";
        var stops = [];
        for (var stop in this.params) {
            if (this.params.hasOwnProperty(stop)) {
                stops.push(this.params[stop] + " " + stop + "%");
            }
        }
        css += stops.join(", ") + ")";
        return css;
    }
});

/**
 * A radial gradient background
 * @extends Background
 * @param {Position|Shape} center - The gradient center
 * @param {GradientParams} params - The gradient definition
 * @constructor
 */
function RadialGradient(center, params) {
    Utils.assertLength(arguments, 1);
    if (center instanceof Shape) {
        this.center = center.position;
    } else if (center instanceof Position) {
        this.center = center;
    }
    this.params = params;
}

Utils.extends(RadialGradient, Background, {
    /**
     *
     * @param {Shape|Scene} shape -
     * @returns {number}
     */
    getRadius: function(shape) {
        return Utils.max(shape.width(), shape.height()) / 2;
    },
    /**
     * Build the gradient
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @param {Shape} shape - The holding shape
     * @return {CanvasGradient}
     * @memberOf RadialGradient#
     */
    getStyle: function(ctx, shape) {
        var x = this.center.getX();
        var y = this.center.getY();
        var gradient = ctx.createRadialGradient(x, y, 0, x, y, this.getRadius(shape));
        for (var stop in this.params) {
            if (this.params.hasOwnProperty(stop)) {
                gradient.addColorStop(stop / 100, this.params[stop]);
            }
        }
        this.style = gradient;
        return this._getStyle();
    },
    /**
     *
     * @returns {string}
     * @memberOf RadialGradient#
     */
    getCSS: function() {
        var x = this.center.getX() + "px ";
        var y = this.center.getY() + "px";
        var css = "radial-gradient(circle closest-side at " + x + y + ", ";
        var stops = [];
        for (var stop in this.params) {
            if (this.params.hasOwnProperty(stop)) {
                stops.push(this.params[stop] + " " + stop + "%");
            }
        }
        css += stops.join(", ") + ")";
        return css;
    }
});

/**
 * A couple of number for positioning
 * @param {Number} x - The x value
 * @param {Number} y - The y value
 * @param {Animation} [animation] - The position animation
 * @constructor
 */
function Position(x, y, animation) {
    this.x = +x || 0;
    this.y = +y || 0;
    this.origin = {
        x: this.x,
        y: this.y
    };
    this.animation = animation || false;
    this.linked = [];
    this.isLinked = false;
}

/**
 * Return a new position from a shape or a position
 * @param {Position|Shape} other - A reference for a new position, automatically linked
 * @return {Position}
 */
Position.createFrom = function(other) {
    var pos;
    if (other instanceof Shape) {
        pos = Position.createFrom(other.position);
    } else if (other instanceof Position) {
        pos = new Position(other.getX(), other.getY());
        other.addLink(pos);
    } else {
        throw new TypeError("First argument should be type Shape or Position, but " + other.constructor.name + " given");
    }
    return pos;
};

Utils.extends(Position, null, {
    /**
     * Get the x value
     * @return {Number}
     */
    getX: function() {
        return this.x;
    },
    /**
     * Get the y value
     * @return {Number}
     */
    getY: function() {
        return this.y;
    },
    /**
     * Set a new value for x and move linked positions
     * @param {Number} [x=0] - The new x value
     * @return {Position} Itself
     */
    setX: function(x) {
        return this.setTo(x, this.y);
    },
    /**
     * Set a new value for y and move linked positions
     * @param {Number} [y=0] - The new y value
     * @return {Position} Itself
     */
    setY: function(y) {
        return this.setTo(this.x, y);
    },
    /**
     * Move this to a new position
     * @param {Number} [x=0]
     * @param {Number} [y=0]
     * @returns {*|Position}
     */
    setTo: function(x, y) {
        var diffX = (+x || 0) - this.x;
        var diffY = (+y || 0) - this.y;
        return this.addX(diffX).addY(diffY);
    },
    /**
     * Add to the x value
     * @param {Number} [diff=0] - How much to add
     * @param {Boolean} [override=false] - If true, will change the origin value
     * @return {Position} Itself
     */
    addX: function(diff, override) {
        return this.move(diff, 0, override);
    },
    /**
     * Add to the y value
     * @param {Number} [diff=0] - How much to add
     * @param {Boolean} [override=false] - If true, will change the origin value
     * @return {Position} Itself
     */
    addY: function(diff, override) {
        return this.move(0, diff, override);
    },
    /**
     * Move the position by some x and y
     * @param {Number} [diffX=0] - How much to move by x
     * @param {Number} [diffY=0] - How much to move by y
     * @param {Boolean} [override=false] - If true, will change the origin value
     * @returns {Position} Itself
     */
    move: function(diffX, diffY, override) {
        diffX = +diffX || 0;
        diffY = +diffY || 0;
        if (diffX !== 0 || diffY !== 0) {
            this.x += diffX;
            this.y += diffY;
            if (override) {
                this.origin.x += diffX;
                this.origin.y += diffY;
            }
            this.linked.forEach(function(link) {
                link.move(diffX, diffY, true);
            });
        }
        return this;
    },
    /**
     * Define the origin of the position
     * @param {Number} x - A x value
     * @param {Number} y - A y value
     * @return {Position} Itself
     */
    setOrigin: function(x, y) {
        this.x = x + (this.x - this.origin.x);
        this.y = y + (this.y - this.origin.y);
        this.origin.x = x;
        this.origin.y = y;
        return this;
    },
    /**
     * Return a position to its origin
     * @return {Position} Itself
     */
    reset: function() {
        return this.setX(this.origin.x).setY(this.origin.y);
    },
    /**
     * Define an animation to apply to this position
     * @param {Animation} animation -
     * @return {Position} Itself
     */
    animateWith: function(animation) {
        this.animation = animation;
        return this;
    },
    /**
     * Run the animation of this position
     * @param {CanvasRenderingContext2D} ctx - The rendering context
     * @return {Position} Itself
     */
    animate: function(ctx) {
        if (this.animation) {
            this.animation.run(this, ctx);
        }
        return this;
    },
    /**
     * Link a position to this one
     * @param {Position} position - Another position to link, will be moved alongside this position
     */
    addLink: function(position) {
        Utils.assertLength(arguments, 1);
        position.isLinked = true;
        this.linked.push(position);
    }
});

/**
 * @typedef {Object} SceneOptions
 * @extends ShapeOptions
 * @param {Number} width - The scene's width
 * @param {Number} height - The scene's height
 */
/**
 * Represent a display, can be fill with different shape and image
 * @param {HTMLCanvasElement} canvas - The canvas element for drawing
 * @param {ShapeOptions} [options] - Global options for the scene, will serves as default for all shapes
 * @constructor
 */
function Scene(canvas, options) {
    Utils.assertLength(arguments, 1);
    this.options = options || {};
    canvas.width = this.options.width || window.innerWidth;
    canvas.height = this.options.height || window.innerHeight;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    this.context = canvas.getContext("2d");
    this.shapes = [];
    this.loop = false;
}

Utils.extends(Scene, null, {
    /**
     * Start all animations
     * @memberOf Scene#
     */
    startAnimation: function() {
        if (!this.loop) {
            this.loop = true;
            this.render();
        }
    },
    /**
     * Stop all animations
     * @memberOf Scene#
     */
    stopAnimation: function() {
        this.loop = false;
    },
    /**
     * Draw the scene once
     * @memberOf Scene#
     */
    render: function() {
        if (this.loop) {
            requestAnimationFrame(this.render.bind(this));
        }
        if (this.options.fillColor instanceof Background) {
            this.context.canvas.style.backgroundImage = this.options.fillColor.getCSS(this);
        } else if (typeof this.options.fillColor === "string") {
            this.context.canvas.style.backgroundColor = this.options.fillColor;
        }
        var ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.shapes.forEach(function(layer) {
            layer.forEach(function(shape) {
                shape.render(ctx);
            });
        });
    },
    /**
     * Add a shape to the scene
     * @param {Shape} shape - Any shape
     * @param {Number} [zIndex=0] - Used to define a drawing order, should be a positive integer
     * @memberOf Scene#
     */
    add: function(shape, zIndex) {
        Utils.assertLength(arguments, 1);
        zIndex = zIndex || 0;
        if (!this.shapes[zIndex]) {
            this.shapes[zIndex] = [];
        }
        this.shapes[zIndex].push(shape);
        shape.completeOptions(this.options);
    },
    /**
     * Add a background color to the scene
     * @param {String|Background} background - Any color string or background
     * @memberOf Scene#
     */
    background: function(background) {
        if (background instanceof Background || typeof background === "string") {
            this.options.fillColor = background;
        } else {
            throw new TypeError("Unexpected background type.");
        }
    },
    /**
     * Remove all shape from scene
     * @memberOf Scene#
     */
    clear: function() {
        this.shapes = [];
    },
    /**
     * Return the center of the scene
     * @return {Position}
     * @memberOf Scene#
     */
    center: function() {
        return new Position(Utils.floor(this.width() / 2), Utils.floor(this.height() / 2));
    },
    /**
     * Return a random position within the scnee
     * @returns {Position}
     * @memberOf Scene#
     */
    randomPosition: function() {
        return new Position(Utils.random(this.width()), Utils.random(this.height()));
    },
    /**
     * Get the width of the scene
     * @return {Number}
     * @memberOf Scene#
     */
    width: function() {
        return this.context.canvas.width;
    },
    /**
     * Get the height of the scene
     * @return {Number}
     * @memberOf Scene#
     */
    height: function() {
        return this.context.canvas.height;
    }
});

/**
 * @typedef {Object} ShapeOptions
 * @param {String|Background} fillColor - A color string or a background to fill the shape
 * @param {String} strokeColor - A color string for the shape's outlines
 * @param {Number} strokeWidth - The width of the shape's outlines (need a strokeColor to take effect)
 */
/**
 * A generic shape
 * @param {Position|Shape} position - Its position on the scene
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @constructor
 */
function Shape(position, options) {
    Utils.assertLength(arguments, 1);
    this.position = Position.createFrom(position);
    this.options = options || {};
}

Utils.extends(Shape, null, {
    /**
     * Move and draw the shape
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Shape#
     */
    render: function(ctx) {
        ctx.save();
        this.position.animate(ctx);
        this.draw(ctx);
        ctx.restore();
    },
    /**
     * Draw the shape into the context
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Shape#
     */
    draw: function(ctx) {
        ctx.beginPath();
        this.trace(ctx);
        this.fill(ctx);
        this.stroke(ctx);
        ctx.closePath();
        if (this.options.debug) {
            ctx.fillStyle = "#F33";
            ctx.fillRect(this.position.getX() - 1, this.position.getY() - 1, 2, 2);
        }
    },
    /**
     * Add a background for the shape
     * @param {String|Background} background
     * @memberOf Shape#
     */
    background: function(background) {
        Scene.prototype.background.call(this, background);
    },
    /**
     * Fill the shape with its color
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Shape#
     */
    fill: function(ctx) {
        if (this.options.fillColor) {
            if (this.options.fillColor instanceof Background) {
                ctx.fillStyle = this.options.fillColor.getStyle(ctx, this);
            } else if (typeof this.options.fillColor === "string") {
                ctx.fillStyle = this.options.fillColor;
            }
            ctx.fill();
        }
    },
    /**
     * Stroke the contour of the shape
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Shape#
     */
    stroke: function(ctx) {
        if (this.options.strokeColor) {
            ctx.strokeStyle = this.options.strokeColor;
            ctx.lineWidth = this.options.strokeWidth || 1;
            ctx.stroke();
        }
    },
    /**
     * Animate this shape position with an animation
     * @param {Animation} animation - Any animation
     * @memberOf Shape#
     */
    animateWith: function(animation) {
        this.position.animateWith(animation);
    },
    /**
     * Add options to the shape without override
     * @param {ShapeOptions} moreOptions - A map like object
     * @memberOf Shape#
     */
    completeOptions: function(moreOptions) {
        for (var key in moreOptions) {
            if (moreOptions.hasOwnProperty(key) && this.options[key] === undefined) {
                this.options[key] = moreOptions[key];
            }
        }
    },
    trace: function() {
        throw new ReferenceError("Unimplemented function.");
    },
    width: function() {
        throw new ReferenceError("Unimplemented function.");
    },
    height: function() {
        throw new ReferenceError("Unimplemented function.");
    }
});

/**
 * An arc shape between two points
 * @extends Shape
 * @param {Position|Shape} position - Its position on the scene
 * @param {Number} radius - The radius of the arc (in pixel)
 * @param {Number} [startAngle=0] - The angle from to start the arc (in radian, 0 is north)
 * @param {Number} [endAngle=PI] - The angle where to end the arc (in radian, 0 is north)
 * @param {Boolean} [clockwise=false] - The direction of rotation is clockwise (false for anti-clockwise)
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @constructor
 */
function Arc(position, radius, startAngle, endAngle, clockwise, options) {
    Utils.assertLength(arguments, 2);
    Shape.call(this, position, options);
    this.radius = radius;
    this.startAngle = startAngle || 0;
    this.endAngle = endAngle || Utils.PI;
    this.clockwise = !!clockwise;
}

Utils.extends(Arc, Shape, {
    /**
     * Trace the arc
     * @override
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Arc#
     */
    trace: function(ctx) {
        ctx.arc(this.position.getX(), this.position.getY(), this.radius, this.startAngle, this.endAngle, !this.clockwise);
    }
});

/**
 * A circle shape
 * @extends Arc
 * @param {Position|Shape} position - Its position on the scene
 * @param {Number} radius - The radius of the circle (in pixel)
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @constructor
 */
function Circle(position, radius, options) {
    Utils.assertLength(arguments, 2);
    Arc.call(this, position, radius, 0, 2 * Utils.PI, true, options);
}

Utils.extends(Circle, Arc, {
    /**
     * Get this circle's width
     * @override
     * @returns {Number}
     * @memberOf Circle#
     */
    width: function() {
        return this.radius * 2;
    },
    /**
     * Get this circle's height
     * @override
     * @returns {Number}
     * @memberOf Circle#
     */
    height: function() {
        return this.radius * 2;
    }
});

/**
 * A single point in space
 * @extends Shape
 * @param {Position} position - The position of the point
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @constructor
 */
function Point(position, options) {
    Utils.assertLength(arguments, 1);
    Shape.call(this, position, options);
}

Utils.extends(Point, Shape, {
    /**
     * One can't trace a point
     * @override
     * @memberOf Point#
     */
    trace: Utils.noop,
    /**
     * One can't stroke a point
     * @override
     * @memberOf Point#
     */
    stroke: Utils.noop,
    /**
     * Get point width
     * @override
     * @returns {Number}
     * @memberOf Point#
     */
    width: function() {
        return 0;
    },
    /**
     * Get point height
     * @override
     * @returns {Number}
     * @memberOf Point#
     */
    height: function() {
        return 0;
    }
});

/**
 * A shape from multiple point
 * @extends Shape
 * @param {Array<Position|Shape>} points - A list of points
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @constructor
 */
function Polygon(points, options) {
    Utils.assertLength(arguments, 1);
    Utils.assertLength(points, 1);
    this.position = new Position();
    this.options = options || {};
    this.points = [];
    this.isLinkedToOthers = false;
    this.extremes = {
        minX: null,
        maxX: null,
        minY: null,
        maxY: null
    };
    var sumX = 0;
    var sumY = 0;
    var l = points.length;
    for (var i = 0; i < l; ++i) {
        var p;
        if (points[i] instanceof Shape) {
            this.isLinkedToOthers = true;
            p = Position.createFrom(points[i]);
        } else if (points[i] instanceof Position) {
            p = points[i];
        }
        if (p) {
            sumX += p.getX();
            sumY += p.getY();
            this._saveExtremes(p);
            this.position.addLink(p);
            this.points.push(p);
        } else {
            throw new TypeError("Polygon can only link positions or shapes, but " + points[i].constructor.name + " given.");
        }
    }
    this.position.setOrigin(sumX / l, sumY / l);
}

Utils.extends(Polygon, Shape, {
    /**
     * Check a position against stored extremes
     * @param {Position} position - Any position part of this polygon
     * @private
     * @memberOf Polygon#
     */
    _saveExtremes: function(position) {
        var x = position.getX();
        var y = position.getY();
        this.extremes.minX = this.extremes.minX === null ? x : Utils.min(this.extremes.minX, x);
        this.extremes.maxX = this.extremes.maxX === null ? x : Utils.max(this.extremes.maxX, x);
        this.extremes.minY = this.extremes.minY === null ? y : Utils.min(this.extremes.minY, y);
        this.extremes.maxY = this.extremes.maxY === null ? y : Utils.max(this.extremes.maxY, y);
    },
    /**
     * Trace the polygon
     * @override
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Polygon#
     */
    trace: function(ctx) {
        var first = this.points[0];
        ctx.moveTo(first.getX(), first.getY());
        for (var i = 1, l = this.points.length; i < l; ++i) {
            var p = this.points[i];
            this._saveExtremes(p);
            ctx.lineTo(p.getX(), p.getY());
        }
        ctx.lineTo(first.getX(), first.getY());
    },
    /**
     * Check if polygon can be animated
     * @override
     * @param {Animation} animation - Any animation
     * @memberOf Polygon#
     */
    animateWith: function(animation) {
        if (this.isLinkedToOthers) {
            throw new ReferenceError("Can't animate polygon with link to other.");
        } else {
            this._animateWith(animation);
        }
    },
    /**
     * Get this shape's width
     * @override
     * @return {Number}
     * @memberOf Polygon#
     */
    width: function() {
        return this.extremes.maxX - this.extremes.minX;
    },
    /**
     * Get this shape's height
     * @override
     * @return {Number}
     * @memberOf Polygon#
     */
    height: function() {
        return this.extremes.maxY - this.extremes.minY;
    }
});

/**
 * A shape from multiple point with rounded angle
 * @extends Polygon
 * @param {Array<Position|Shape>} points - A list of points
 * @param {Number} [tension=0.5] - Define the roundness of the blob
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @constructor
 */
function Blob(points, tension, options) {
    this.tension = tension || .5;
    Polygon.call(this, points, options);
}

/**
 * Return an array of coordinates for control points around a point
 * @param {Position} p0 - Previous point
 * @param {Position} p1 - Current point
 * @param {Position} p2 - Next Point
 * @param {Number} tension - Roundness of angles
 * @return {Array<Number>}
 * @private
 * @static
 */
Blob._getControlPoints = function(p0, p1, p2, tension) {
    var x0 = p0.getX();
    var x1 = p1.getX();
    var x2 = p2.getX();
    var y0 = p0.getY();
    var y1 = p1.getY();
    var y2 = p2.getY();
    var d01 = Utils.sqrt(Utils.sq(x1 - x0) + Utils.sq(y1 - y0));
    var d12 = Utils.sqrt(Utils.sq(x2 - x1) + Utils.sq(y2 - y1));
    var fa = tension * d01 / (d01 + d12);
    var fb = tension - fa;
    var p1x = x1 + fa * (x0 - x2);
    var p1y = y1 + fa * (y0 - y2);
    var p2x = x1 - fb * (x0 - x2);
    var p2y = y1 - fb * (y0 - y2);
    return [ p1x, p1y, p2x, p2y ];
};

Utils.extends(Blob, Polygon, {
    /**
     * Trace the blob
     * @override
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Blob#
     */
    trace: function(ctx) {
        var cp = [];
        var n = this.points.length;
        for (var i = 0; i < n; ++i) {
            cp[(i + 1) % n] = Blob._getControlPoints(this.points[i], this.points[(i + 1) % n], this.points[(i + 2) % n], this.tension);
        }
        ctx.moveTo(this.points[0].getX(), this.points[0].getY());
        for (i = 0; i < n; ++i) {
            ctx.bezierCurveTo(cp[i][2], cp[i][3], cp[(i + 1) % n][0], cp[(i + 1) % n][1], this.points[(i + 1) % n].getX(), this.points[(i + 1) % n].getY());
        }
    }
});

/**
 * A line between two point
 * @extends Polygon
 * @param {Position|Shape} startPoint - Its origin point or shape
 * @param {Position|Shape} endPoint - Its arrival point or shape
 * @param {ShapeOptions} [options] - Specific options for this line
 * @constructor
 */
function Line(startPoint, endPoint, options) {
    Utils.assertLength(arguments, 2);
    Polygon.call(this, [ startPoint, endPoint ], options);
}

Utils.extends(Line, Polygon, {
    /**
     * One can't fill a line
     * @override
     * @memberOf Line#
     */
    fill: Utils.noop,
    /**
     * Get the line x length
     * @override
     * @return {Number}
     * @memberOf Line#
     */
    width: function() {
        return Utils.abs(this.points[0].getX(), this.points[1].getX());
    },
    /**
     * Get the line y length
     * @override
     * @return {Number}
     * @memberOf Line#
     */
    height: function() {
        return Utils.abs(this.points[0].getY(), this.points[1].getY());
    }
});

/**
 * A rectangular shape
 * @extends Polygon
 * @param {Position|Shape} startPoint - Position of the upper-left corner
 * @param {Number} width - Width of the rectangle
 * @param {Number} height - Height of the rectangle
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @constructor
 */
function Rectangle(startPoint, width, height, options) {
    Utils.assertLength(arguments, 2);
    this.startPoint = Position.createFrom(startPoint);
    this.endPoint = new Position(this.startPoint.getX() + width, this.startPoint.getY() + height);
    Polygon.call(this, [ this.startPoint, this.endPoint ], options);
}

/**
 * Create a rectangle between two point
 * @param {Position|Shape} from - Top-left point
 * @param {Position|Shape} to - Bottom-right point
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @return {Rectangle}
 */
Rectangle.fromPointToPoint = function(from, to, options) {
    var rect = new Rectangle(from, 0, 0, options);
    rect.endPoint = Position.createFrom(to);
    rect.isLinkedToOthers = true;
    return rect;
};

Utils.extends(Rectangle, Polygon, {
    /**
     * Trace the rectangle
     * @override
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Rectangle#
     */
    trace: function(ctx) {
        ctx.rect(this.startPoint.getX(), this.startPoint.getY(), this.endPoint.getX() - this.startPoint.getX(), this.endPoint.getY() - this.startPoint.getY());
    },
    /**
     * Set the rectangle's width
     * @param {Number} value - Any value
     * @return {Rectangle} Itself
     * @memberOf Rectangle#
     */
    setWidth: function(value) {
        this.endPoint.setX(this.startPoint.getX() + value);
        return this;
    },
    /**
     * Set the rectangle's height
     * @param {Number} value - Any value
     * @return {Rectangle} Itself
     * @memberOf Rectangle#
     */
    setHeight: function(value) {
        this.endPoint.setY(this.startPoint.getY() + value);
        return this;
    },
    /**
     * Get this rectangle's width
     * @override
     * @returns {Number}
     * @memberOf Rectangle#
     */
    width: function() {
        return Line.prototype.width.call(this);
    },
    /**
     * Get this rectangle's height
     * @override
     * @returns {Number}
     * @memberOf Rectangle#
     */
    height: function() {
        return Line.prototype.height.call(this);
    }
});

/**
 * A regular (all side the same length) Rectangle
 * @extends Rectangle
 * @param {Position|Shape} startPoint - Position of the upper-left corner
 * @param {Number} size - Length of the sides (in pixels)
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @constructor
 */
function Square(startPoint, size, options) {
    Utils.assertLength(arguments, 2);
    Rectangle.call(this, startPoint, size, size, options);
}

Utils.extends(Square, Rectangle);

/**
 * A shape with some branches around a point
 * @extends Polygon
 * @param {Position|Shape} center - The center of the shape
 * @param {Number} radius - The distance between the center and any branch tip
 * @param {Number} nbBranch - The number of branches of the shape, can't be less than 3
 * @param {Number} [dropRatio=0.5] - The ratio between branches length and drops between them
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @constructor
 */
function Star(center, radius, nbBranch, dropRatio, options) {
    Utils.assertLength(arguments, 3);
    if (nbBranch < 3) {
        throw new RangeError("Can't create a star with less than 3 branches, but only " + nbBranch + " given.");
    }
    dropRatio = dropRatio || .5;
    var points = [];
    var iteration = nbBranch * 2;
    for (var i = 0; i < iteration; ++i) {
        var rotation = (i / iteration - .25) * Utils.PI * 2;
        var dist = i % 2 ? radius * dropRatio : radius;
        var p = Position.createFrom(center);
        p.addX(Utils.cos(rotation) * dist).addY(Utils.sin(rotation) * dist);
        points.push(p);
    }
    Polygon.call(this, points, options);
}

Utils.extends(Star, Polygon, {});

/**
 * A three point shape
 * @extends Polygon
 * @param {Position|Shape} firstPoint - The first summit of the triangle
 * @param {Position|Shape} secondPoint - The second summit of the triangle
 * @param {Position|Shape} thirdPoint - The third summit of the triangle
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @constructor
 */
function Triangle(firstPoint, secondPoint, thirdPoint, options) {
    Utils.assertLength(arguments, 3);
    Polygon.call(this, [ firstPoint, secondPoint, thirdPoint ], options);
}

Utils.extends(Triangle, Polygon, {});

/**
 * @typedef {Object} TextOptions
 * @extends ShapeOptions
 * @param {String} [font="sans-serif"} - The font's name
 * @param {String} [fontSize=10] - The font's size
 * @param {Boolean} [bold=false] - Is the text bold
 * @param {Boolean} [italic=false] - Is the text italic
 * @param {String} [align="left"] - The text's vertical alignment
 * @param {String} [baseline="alphabetic"] - The text's baseline position
 */
/**
 * Draw a text
 * @extends Shape
 * @param {String} text - Content of the text
 * @param {Position|Shape} position - Position of the text
 * @param {TextOptions} [options] - Specific options for this shape
 * @constructor
 */
function Text(text, position, options) {
    Utils.assertLength(arguments, 2);
    this.text = text;
    Shape.call(this, position, options);
}

Utils.extends(Text, Shape, {
    /**
     * Trace the text
     * @override
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Text#
     */
    trace: function(ctx) {
        var font = (this.options.bold ? "bold " : "") + (this.options.italic ? "italic " : "");
        font += (this.options.fontSize || 10) + "px " + (this.options.font || "sans-serif");
        ctx.font = font;
        ctx.textAlign = this.options.align || "left";
        ctx.textBaseline = this.options.baseline || "alphabetic";
    },
    /**
     * Fill the text
     * @override
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Text#
     */
    fill: function(ctx) {
        if (this.options.fillColor) {
            ctx.save();
            ctx.fillStyle = this.options.fillColor;
            ctx.translate(this.position.getX(), this.position.getY());
            ctx.fillText(this.text, 0, 0);
            ctx.restore();
        }
    },
    /**
     * Stroke the text outline
     * @override
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Text#
     */
    stroke: function(ctx) {
        if (this.options.strokeColor) {
            ctx.save();
            ctx.strokeStyle = this.options.strokeColor;
            ctx.lineWidth = this.options.strokeWidth;
            ctx.translate(this.position.getX(), this.position.getY());
            ctx.strokeText(this.text, 0, 0);
            ctx.restore();
        }
    }
});