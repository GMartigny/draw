/**
 * A three point shape
 * @extends Polygon
 * @param {Position|Shape} firstPoint -
 * @param {Position|Shape} secondPoint -
 * @param {Position|Shape} thirdPoint -
 * @param {ShapeOptions} options - Specific options for this shape
 * @constructor
 */
function Triangle (firstPoint, secondPoint, thirdPoint, options) {
    Utils.assertLength(arguments, 3);

    Polygon.call(this, [firstPoint, secondPoint, thirdPoint], options);
}
Utils.extends(Triangle, Polygon);
