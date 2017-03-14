/**
 * @typedef {Object} TextOptions
 * @extends ShapeOptions
 * @param {String} [font="sans-serif"] - The font's name
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
function Text (text, position, options) {
    Utils.assertLength(arguments, 2);

    this.text = text;
    Shape.call(this, position, options);
}
Utils.extends(Text, Shape, {
    /**
     * Trace the text
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Text#
     */
    trace: function(ctx) {
        var font = (this.options.bold ? "bold " : "") + (this.options.italic ? "italic " : "");
        font += (this.options.fontSize || 10) + "px " + (this.options.font || "sans-serif");
        Utils.setProperty(ctx, "font", font);
        Utils.setProperty(ctx, "textAlign", this.options.align || "left");
        Utils.setProperty(ctx, "textBaseline", this.options.baseline || "alphabetic");
    },
    /**
     * Fill the text
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Text#
     */
    fill: function(ctx) {
        if (this.options.fillColor) {
            ctx.save();
            Utils.setProperty(ctx, "fillStyle", this.options.fillColor);
            ctx.translate(this.position.getX(), this.position.getY());
            ctx.fillText(this.text, 0, 0);
            ctx.restore();
        }
    },
    /**
     * Stroke the text outline
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Text#
     */
    stroke: function(ctx) {
        if (this.options.strokeColor) {
            ctx.save();
            Utils.setProperty(ctx, "strokeStyle", this.options.strokeColor);
            Utils.setProperty(ctx, "lineWidth", this.options.strokeWidth || 1);
            ctx.translate(this.position.getX(), this.position.getY());
            ctx.strokeText(this.text, 0, 0);
            ctx.restore();
        }
    },
    /**
     * Get the text's width
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @returns {Number}
     * @memberOf Text#
     */
    width: function(ctx) {
        this.trace(ctx);
        return ctx.measureText(this.text).width;
    },
    /**
     * Get the text's height
     * @returns {Number}
     * @memberOf Text#
     */
    height: function() {
        return this.options.fontSize || 10;
    }
});
