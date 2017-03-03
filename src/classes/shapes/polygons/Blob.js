/**
 * A shape from multiple point with rounded angle
 * @extends Polygon
 * @param {Array<Position|Shape>} points - A list of points
 * @param {Number} tension - Define the roundness of the blob
 * @param {Object} options - Specific options for this shape
 * @constructor
 */
function Blob (points, tension, options) {
    this.tension = tension || 0.5;

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
Blob._getControlPoints = function (p0, p1, p2, tension) {
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

    return [p1x, p1y, p2x, p2y];
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
            ctx.bezierCurveTo(
            cp[i][2], cp[i][3],
            cp[(i + 1) % n][0], cp[(i + 1) % n][1],
            this.points[(i + 1) % n].getX(), this.points[(i + 1) % n].getY()
            );
        }
    }
});
