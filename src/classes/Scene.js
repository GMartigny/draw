/**
 * Represent a display, can be fill with different shape and image
 * @param {HTMLElement} canvas - The canvas element for drawing
 * @param {Object} [options] - Global options for the scene
 * @constructor
 */
function Scene (canvas, options) {
    Utils.assertLength(arguments, 1);

    this.context = canvas.getContext("2d");
    this.options = options || {};
    this.shapes = [];
    this.loop = false;
}
Scene.prototype = {
    /**
     * Start all animations
     */
    startAnimation: function() {
        if (!this.loop) {
            this.loop = true;
            this.render();
        }
    },
    /**
     * Stop all animations
     */
    stopAnimation: function() {
        this.loop = false;
    },
    /**
     * Draw the scene once
     */
    render: function() {
        if (this.loop) {
            requestAnimationFrame(this.render.bind(this));
        }

        var ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.shapes.forEach(function(layer) {
            layer.forEach(function (shape) {
                shape.render(ctx);
            });
        });
    },
    /**
     * Add a shape to the scene
     * @param {Shape} shape - Any shape
     * @param {Number} [zIndex=0] - Used to define a drawing order, should be a positive integer
     */
    add: function(shape, zIndex) {
        Utils.assertLength(arguments, 1);

        zIndex = zIndex || 0;
        if (!this.shapes[zIndex]) {
            this.shapes[zIndex] = [];
        }

        this.shapes[zIndex].push(shape);
        shape.completeOptions(this.options);
    },
    /**
     * Add a background color to the scene
     * @param {String} color - Any color string
     */
    background: function(color) {
        this.context.canvas.style.backgroundColor = color;
    },
    /**
     * Remove all shape from scene
     */
    clear: function() {
        this.shapes = [];
    },
    /**
     * Return the center of the scene
     * @return {Position}
     */
    center: function() {
        return new Position(Utils.floor(this.width() / 2), Utils.floor(this.height() / 2));
    },
    randomPosition: function() {
        return new Position(Utils.random(this.width()), Utils.random(this.height()));
    },
    /**
     * Get the width of the scene
     * @return {Number}
     */
    width: function() {
        return this.context.canvas.width;
    },
    /**
     * Get the height of the scene
     * @return {Number}
     */
    height: function() {
        return this.context.canvas.height;
    }
};
