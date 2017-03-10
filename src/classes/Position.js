/**
 * A couple of number for positioning
 * @param {Number} x - The x value
 * @param {Number} y - The y value
 * @param {Animation} [animation] - The position animation
 * @constructor
 */
function Position (x, y, animation) {
    this.x = +x || 0;
    this.y = +y || 0;
    this.origin = {
        x: this.x,
        y: this.y
    };
    this.animation = animation || false;
    this.linked = [];
    this.isLinked = false;
}
/**
 * Return a new position from a shape or a position
 * @param {Position|Shape} other - A reference for a new position, automatically linked
 * @return {Position}
 */
Position.createFrom = function(other) {
    var pos;
    if (other instanceof Shape) {
        pos = Position.createFrom(other.position);
    }
    else if (other instanceof Position) {
        pos = new Position(other.getX(), other.getY());
        other.addLink(pos);
    }
    else {
        throw new TypeError("First argument should be type Shape or Position, but " + other.constructor.name + " given");
    }
    return pos;
};
Utils.extends(Position, null, {
    /**
     * Get the x value
     * @return {Number}
     */
    getX: function() {
        return this.x;
    },
    /**
     * Get the y value
     * @return {Number}
     */
    getY: function() {
        return this.y;
    },
    /**
     * Set a new value for x and move linked positions
     * @param {Number} [x=0] - The new x value
     * @return {Position} Itself
     */
    setX: function(x) {
        return this.setTo(x, this.y);
    },
    /**
     * Set a new value for y and move linked positions
     * @param {Number} [y=0] - The new y value
     * @return {Position} Itself
     */
    setY: function(y) {
        return this.setTo(this.x, y);
    },
    /**
     * Move this to a new position
     * @param {Number} [x=0]
     * @param {Number} [y=0]
     * @returns {*|Position}
     */
    setTo: function(x, y) {
        var diffX = (+x || 0) - this.x;
        var diffY = (+y || 0) - this.y;
        return this.addX(diffX).addY(diffY);
    },
    /**
     * Add to the x value
     * @param {Number} [diff=0] - How much to add
     * @param {Boolean} [override=false] - If true, will change the origin value
     * @return {Position} Itself
     */
    addX: function(diff, override) {
        return this.move(diff, 0, override);
    },
    /**
     * Add to the y value
     * @param {Number} [diff=0] - How much to add
     * @param {Boolean} [override=false] - If true, will change the origin value
     * @return {Position} Itself
     */
    addY: function(diff, override) {
        return this.move(0, diff, override);
    },
    /**
     * Move the position by some x and y
     * @param {Number} [diffX=0] - How much to move by x
     * @param {Number} [diffY=0] - How much to move by y
     * @param {Boolean} [override=false] - If true, will change the origin value
     * @returns {Position} Itself
     */
    move: function(diffX, diffY, override) {
        diffX = +diffX || 0;
        diffY = +diffY || 0;
        if (diffX !== 0 || diffY !== 0) {
            this.x += diffX;
            this.y += diffY;
            if (override) {
                this.origin.x += diffX;
                this.origin.y += diffY;
            }
            this.linked.forEach(function (link) {
                link.move(diffX, diffY, true);
            });
        }
        return this;
    },
    /**
     * Define the origin of the position
     * @param {Number} x - A x value
     * @param {Number} y - A y value
     * @return {Position} Itself
     */
    setOrigin: function(x, y) {
        this.x = x + (this.x - this.origin.x);
        this.y = y + (this.y - this.origin.y);
        this.origin.x = x;
        this.origin.y = y;
        return this;
    },
    /**
     * Return a position to its origin
     * @return {Position} Itself
     */
    reset: function() {
        return this.setX(this.origin.x).setY(this.origin.y);
    },
    /**
     * Define an animation to apply to this position
     * @param {Animation} animation -
     * @return {Position} Itself
     */
    animateWith: function(animation) {
        this.animation = animation;
        return this;
    },
    /**
     * Run the animation of this position
     * @param {CanvasRenderingContext2D} ctx - The rendering context
     * @return {Position} Itself
     */
    animate: function(ctx) {
        if (this.animation) {
            this.animation.run(this, ctx);
        }
        return this;
    },
    /**
     * Link a position to this one
     * @param {Position} position - Another position to link, will be moved alongside this position
     */
    addLink: function(position) {
        Utils.assertLength(arguments, 1);

        position.isLinked = true;
        this.linked.push(position);
    }
});
