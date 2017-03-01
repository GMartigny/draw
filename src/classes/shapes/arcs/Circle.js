/**
 * A circle shape
 * @extends Arc
 * @param {Position|Shape} position - Its position on the scene
 * @param {Number} radius - The radius of the circle (in pixel)
 * @param {Object} [options] - Specific options for this shape
 * @constructor
 */
function Circle (position, radius, options) {
    Utils.assertLength(arguments, 2);

    Arc.call(this, position, radius, 0, 2 * Utils.PI, true, options);
}
Utils.extends(Circle, Arc, /** @lends Circle */ {
    width: function() {
        return this.radius * 2;
    },
    height: function() {
        return this.radius * 2;
    }
});
