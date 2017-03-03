/**
 * A radial gradient background
 * @extends Background
 * @param {Position|Shape} center -
 * @param {GradientParams} params - The gradient definition
 * @constructor
 */
function RadialGradient (center, params) {
    Utils.assertLength(arguments, 1);

    if (center instanceof Shape) {
        this.center = center.position;
    }
    else if (center instanceof Position) {
        this.center = center;
    }
    this.params = params;
}
Utils.extends(RadialGradient, Background, {
    /**
     * Build the gradient
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @param {Shape} shape - The holding shape
     * @return {CanvasGradient}
     * @memberOf RadialGradient#
     */
    getStyle: function(ctx, shape) {
        var origin = this.center || shape.position;
        var x = origin.getX();
        var y = origin.getY();
        var gradient = ctx.createRadialGradient(x, y, 0, x, y, Utils.max(shape.width(), shape.height()) / 2);

        for (var stop in this.params) {
            if (this.params.hasOwnProperty(stop)) {
                gradient.addColorStop(stop / 100, this.params[stop]);
            }
        }

        this.style = gradient;

        return this._getStyle();
    }
});
