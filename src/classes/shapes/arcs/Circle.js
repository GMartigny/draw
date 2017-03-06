/**
 * A circle shape
 * @extends Arc
 * @param {Position|Shape} position - Its position on the scene
 * @param {Number} radius - The radius of the circle (in pixel)
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @constructor
 */
function Circle (position, radius, options) {
    Utils.assertLength(arguments, 2);

    Arc.call(this, position, radius, 0, 2 * Utils.PI, true, options);
}
Utils.extends(Circle, Arc, {
    /**
     * Get this circle's width
     * @returns {Number}
     * @memberOf Circle#
     */
    width: function() {
        return this.radius * 2;
    },
    /**
     * Get this circle's height
     * @returns {Number}
     * @memberOf Circle#
     */
    height: function() {
        return this.radius * 2;
    }
});
