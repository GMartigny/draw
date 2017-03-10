/**
 * A three point shape
 * @extends Polygon
 * @param {Position|Shape} firstPoint - The first summit of the triangle
 * @param {Position|Shape} secondPoint - The second summit of the triangle
 * @param {Position|Shape} thirdPoint - The third summit of the triangle
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @constructor
 */
function Triangle (firstPoint, secondPoint, thirdPoint, options) {
    Utils.assertLength(arguments, 3);

    Polygon.call(this, [firstPoint, secondPoint, thirdPoint], options);
}
Utils.extends(Triangle, Polygon, {
});
