/**
 * @typedef {Object} TextOptions
 * @extends ShapeOptions
 * @param {String} [font="sans-serif"} - The font's name
 * @param {String} [fontSize=10] - The font's size
 * @param {String} [align="left"] - The text's vertical alignment
 * @param {String} [baseline="alphabetic"] - The text's baseline position
 */

/**
 * Draw a text
 * @extends Shape
 * @param {String} text - Content of the text
 * @param {Position|Shape} position - Position of the text
 * @param {TextOptions} options - Specific options for this shape
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
     * @override
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Text#
     */
    trace: function(ctx) {
        ctx.font = this.options.font || "10px sans-serif";
        ctx.textAlign = this.options.align || "left";
        ctx.textBaseline = this.options.baseline || "alphabetic";
    },
    /**
     * Fill the text
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Text#
     */
    fill: function(ctx) {
        if (this.options.fillColor) {
            ctx.fillStyle = this.options.fillColor;
            ctx.translate(this.position.getX(), this.position.getY());
            ctx.fillText(this.text, 0, 0);
        }
    },
    /**
     * Stroke the text outline
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Text#
     */
    stroke: function(ctx) {
        if (this.options.strokeColor) {
            ctx.strokeStyle = this.options.strokeColor;
            ctx.lineWidth = this.options.strokeWidth;
            ctx.translate(this.position.getX(), this.position.getY());
            ctx.strokeText(this.text, 0, 0);
        }
    }
});
