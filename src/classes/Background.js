/**
 * @typedef {Object} GradientParams
 * @param {...Number} [0-100] - A color stop, key for the position and value for the color
 * @example { 0: "red", 50: "green", 100: "blue" }
 */

/**
 * A generic background class
 * @param {String} color - Any color string
 * @constructor
 */
function Background (color) {
    Utils.assertLength(arguments, 1);
    
    this.style = color;
    this.animation = null;
}
Utils.extends(Background, null, {
    /**
     * Return the current style of this background
     * @returns {String}
     * @memberOf Background#
     */
    getStyle: function() {
        if (this.animation) {
            this.animation.run();
        }
        return this.style;
    },
    /**
     * Add an animation to this background
     * @param {Animation} animation - Any animation
     */
    animateWith: function (animation) {
        this.animation = animation;
    },
    /**
     * Get CSS string for this background
     * @returns {String}
     */
    getCSS: function() {
        return this.getStyle();
    }
});
