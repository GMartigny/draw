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
function Scene (canvas, options) {
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
        }
        else if (typeof this.options.fillColor === "string") {
            this.context.canvas.style.backgroundColor = this.options.fillColor;
        }

        var ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.shapes.forEach(function(layer) {
            layer.forEach(function (shape) {
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
        }
        else {
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
