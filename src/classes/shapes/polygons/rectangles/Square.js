/**
 * A regular (all side the same length) Rectangle
 * @extends Rectangle
 * @param {Position|Shape} startPoint - Position of the upper-left corner
 * @param {Number} size - Length of the sides
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @constructor
 */
function Square (startPoint, size, options) {
    Utils.assertLength(arguments, 2);

    Rectangle.call(this, startPoint, size, size, options);
}
Utils.extends(Square, Rectangle, {
});
