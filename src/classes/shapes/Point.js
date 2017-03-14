/**
 * A single point in space
 * @extends Shape
 * @param {Position} position - The position of the point
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @constructor
 */
function Point (position, options) {
    Utils.assertLength(arguments, 1);
    Shape.call(this, position, options);
}
Utils.extends(Point, Shape, {
    /**
     * One can't trace a point
     * @memberOf Point#
     */
    trace: Utils.noop,
    /**
     * One can't stroke a point
     * @memberOf Point#
     */
    stroke: Utils.noop,
    /**
     * Get point width
     * @returns {Number}
     * @memberOf Point#
     */
    width: function() {
        return 0;
    },
    /**
     * Get point height
     * @returns {Number}
     * @memberOf Point#
     */
    height: function() {
        return 0;
    }
});