/**
 * Modify a position with a constant function
 * @param {Function} func - A function to call for each iteration
 * @constructor
 */
function Animation (func) {
    this.iteration = 0;
    this.func = func;
}
/**
 * Give an animation for circling
 * @param {Number} radius - Radius of the circling
 * @param {Number} [speed=0.1] - Speed ratio of the animation
 * @param {Boolean} [counterClockWise=false] - Circle counter clockwise
 * @return {Animation}
 */
Animation.Circle = function(radius, speed, counterClockWise) {
    Utils.assertLength(arguments, 1);
    speed = speed || .1;
    return new Animation(function(i) {
        var rotation = counterClockWise ? i * speed : -i * speed;
        this.setX(this.origin.x + Utils.sin(rotation) * radius);
        this.setY(this.origin.y + Utils.cos(rotation) * radius);
    });
};
/**
 * Give an animation for rotation
 * @param {Number} [speed=0.1] - Speed ratio of the animation
 * @param {Boolean} [counterClockWise=false] - Rotate counter clockwise
 * @return {Animation}
 */
Animation.Rotate = function(speed, counterClockWise) {
    speed = speed || .1;
    return new Animation(function(i, ctx) {
        ctx.translate(this.getX(), this.getY());
        var rotation = counterClockWise ? -i * speed : i * speed;
        ctx.rotate(rotation);
        ctx.translate(-this.getX(), -this.getY());
    });
};
/**
 * Give an animation of gravity simulation
 * @param {Number} [ground] - Value where position bounce
 * @param {Number} [bounce=0.3] - Vertical restitution of bounce (0 = no bounce, 1 = infinite bounce)
 * @return {Animation}
 */
Animation.Gravity = function(ground, bounce) {
    bounce = bounce === undefined ? 0.3 : bounce;
    return new Animation(function(i, ctx) {
        ground = ground || ctx.canvas.height;
        if (this.getY() >= ground && i > 0) {
            this.setY(ground);
            this.animation.iteration = Utils.floor(-i * bounce);
        }
        else {
            this.addY(0.09 * i);
        }
    });
};
Animation.prototype = {
    /**
     * Apply this animation function to a position
     * @param {Position} position - A position to move
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     */
    run: function(position, ctx) {
        this.func.call(position, this.iteration++, ctx);
    },
    /**
     * Restart this animation
     * @param {Position} position - A position to set
     */
    restart: function(position) {
        this.iteration = 0;
        position.reset();
    }
};
