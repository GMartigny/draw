/**
 * A generic background class
 * @param {String} color - Any color string
 * @constructor
 */
function Background (color) {
    this.style = color;
    this.animation = null;
}
Background.prototype = {
    getStyle: function() {
        if (this.animation) {
            this.animation.run();
        }
        return this.style;
    },
    animateWith: function (animation) {
        this.animation = animation;
    }
};
