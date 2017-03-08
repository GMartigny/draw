/**
 * A single point in space
 * @extends Shape
 * @param {Position} position - The position of the point
 * @param {ShapeOptions} options - 
 * @constructor
 */
function Point (position, options) {
    Utils.assertLength(arguments, 1);
    Shape.call(this, position, options);
}
Utils.extends(Point, Shape, {
    trace: function() {},
    width: function() {
        return 0;
    },
    height: function() {
        return 0;
    }
});