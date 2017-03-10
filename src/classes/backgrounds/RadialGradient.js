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
