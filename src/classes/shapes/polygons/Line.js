/**
 * A line between two point
 * @extends Polygon
 * @param {Position|Shape} startPoint - Its origin point or shape
 * @param {Position|Shape} endPoint - Its arrival point or shape
 * @param {ShapeOptions} options - Specific options for this line
 * @constructor
 */
function Line (startPoint, endPoint, options) {
    Utils.assertLength(arguments, 2);

    Polygon.call(this, [startPoint, endPoint], options);
}
Utils.extends(Line, Polygon, {
    /**
     * One can't fill a line
     * @override
     * @memberOf Line#
     */
    fill: function() {},
    /**
     * Get the line x length
     * @return {Number}
     * @memberOf Line#
     */
    width: function() {
        return Utils.abs(this.points[0].getX(), this.points[1].getX());
    },
    /**
     * Get the line y length
     * @return {Number}
     * @memberOf Line#
     */
    height: function() {
        return Utils.abs(this.points[0].getY(), this.points[1].getY());
    }
});
