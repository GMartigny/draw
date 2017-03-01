/**
 * Draw a text
 * @extends Shape
 * @param {String} text - Content of the text
 * @param {Position|Shape} position - Position
 * @param {Object} options - Specific options for this shape
 * @constructor
 */
function Text (text, position, options) {
    Utils.assertLength(arguments, 2);

    this.text = text;
    Shape.call(this, position, options);
}
Utils.extends(Text, Shape, /** @lends Text */ {
    /**
     * Trace the text
     * @override Shape.trace
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     */
    trace: function(ctx) {
        ctx.font = this.options.font || "10px sans-serif";
        ctx.textAlign = this.options.align || "left";
        ctx.textBaseline = this.options.baseline || "alphabetic";
    },
    /**
     * Fill the text
     * @param {CanvasRenderingContext2D} ctx - A drawing context
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
