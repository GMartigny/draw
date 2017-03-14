/**
 * A radial gradient background
 * @extends Background
 * @param {Position|Shape} center - The gradient center
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
        var x = this.center.getX();
        var y = this.center.getY();
        var radius = Utils.max(shape.width(ctx), shape.height(ctx)) / 2;
        var gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);

        for (var stop in this.params) {
            if (this.params.hasOwnProperty(stop)) {
                gradient.addColorStop(stop / 100, this.params[stop]);
            }
        }

        this.style = gradient;

        return this._getStyle();
    },
    /**
     * Get CSS string for this background
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
