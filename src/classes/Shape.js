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
 * @property {Position} This shape's position, it point at the center of the shape (with some exceptions)
 * @constructor
 */
function Shape (position, options) {
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
            Utils.setProperty(ctx, "fillStyle", "#F33");
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
                Utils.setProperty(ctx, "fillStyle", this.options.fillColor.getStyle(ctx, this));
            }
            else if (typeof this.options.fillColor === "string") {
                Utils.setProperty(ctx, "fillStyle", this.options.fillColor);
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
            Utils.setProperty(ctx, "strokeStyle", this.options.strokeColor);
            Utils.setProperty(ctx, "lineWidth", this.options.strokeWidth || 1);
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
