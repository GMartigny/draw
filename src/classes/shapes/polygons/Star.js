/**
 * A shape with some branches around a point
 * @extends Polygon
 * @param {Position|Shape} center - The center of the shape
 * @param {Number} radius - The distance between the center and any branch tip
 * @param {Number} nbBranch - The number of branches of the shape, can't be less than 3
 * @param {Number} [dropRatio=0.5] - The ratio between branches length and drops between them
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @constructor
 */
function Star (center, radius, nbBranch, dropRatio, options) {
    Utils.assertLength(arguments, 3);
    if (nbBranch < 3) {
        throw new RangeError("Can't create a star with less than 3 branches, but only " + nbBranch + " given.");
    }

    dropRatio = dropRatio || 0.5;

    var points = [];
    var iteration = nbBranch * 2;
    for (var i = 0; i < iteration; ++i) {
        var rotation = (i / iteration - 0.25) * Utils.PI * 2;
        var dist = i%2 ? radius * dropRatio : radius;
        var p = Position.createFrom(center);
        p.addX(Utils.cos(rotation) * dist).addY(Utils.sin(rotation) * dist);
        points.push(p);
    }

    this.radius = radius;

    Polygon.call(this, points, options);
}
Utils.extends(Star, Polygon, {
    /**
     * Get the star's width
     * @override
     * @returns {Number}
     * @memberOf Star#
     */
    width: function() {
        return this.radius;
    },
    /**
     * Get the star's height
     * @override
     * @returns {Number}
     * @memberOf Star#
     */
    height: function() {
        return this.width();
    }
});