/**
 * @typedef {Object} ShapeOptions
 * @param {String|Background} fillColor - A color string or a background to fill the shape
 * @param {String} strokeColor - A color string for the shape's outlines
 * @param {Number} strokeWidth - The width of the shape's outlines (need a strokeColor to take effect)
 */

/**
 * A generic shape
 * @param {Position|Shape} position - Its position on the scene
 * @param {ShapeOptions} options - Specific options for this shape
 * @constructor
 */
function Shape (position, options) {
    Utils.assertLength(arguments, 1);

    this.position = Position.createFrom(position);

    this.options = options || {};
}
Shape.prototype = {
    /**
     * Move and draw the shape
     * @param {CanvasRenderingContext2D} ctx - A drawing context
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
     * Fill the shape with its color
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     */
    fill: function(ctx) {
        if (this.options.fillColor) {
            if (this.options.fillColor instanceof Background) {
                ctx.fillStyle = this.options.fillColor.getStyle(ctx, this);
            }
            else if (typeof this.options.fillColor === "string") {
                ctx.fillStyle = this.options.fillColor;
            }
            ctx.fill();
        }
    },
    /**
     * Stroke the contour of the shape
     * @param {CanvasRenderingContext2D} ctx - A drawing context
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
     */
    animateWith: function(animation) {
        this.position.animateWith(animation);
    },
    /**
     * Add options to the shape without override
     * @param {ShapeOptions} moreOptions - A map like object
     * @private
     */
    _completeOptions: function(moreOptions) {
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
};
