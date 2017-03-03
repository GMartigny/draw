/**
 * A shape from multiple point
 * @extends Shape
 * @param {Array<Position|Shape>} points - A list of points
 * @param {Object} options - Specific options for this shape
 * @constructor
 */
function Polygon (points, options) {
    Utils.assertLength(arguments, 1);
    Utils.assertLength(points, 1);

    this.position = new Position();
    this.options = options || {};
    this.points = [];
    this.isLinkedToOthers = false;

    this.extremes = {
        minX: null,
        maxX: null,
        minY: null,
        maxY: null
    };

    var sumX = 0;
    var sumY = 0;
    var l = points.length;
    for (var i = 0; i < l; ++i) {
        var p;
        if (points[i] instanceof Shape) {
            this.isLinkedToOthers = true;
            p = Position.createFrom(points[i]);
        }
        else if (points[i] instanceof Position) {
            p = points[i];
        }
        if (p) {
            sumX += p.getX();
            sumY += p.getY();
            this._checkForExtreme(p);
            this.position.addLink(p);
            this.points.push(p);
        }
        else {
            throw new TypeError("Polygon can only link positions or shapes, but " + points[i].constructor.name + " given.");
        }
    }
    this.position.setOrigin(sumX / l, sumY / l);
}
Utils.extends(Polygon, Shape, {
    /**
     *
     * @param {Position} position -
     * @private
     * @memberOf Polygon#
     */
    _checkForExtreme: function(position) {
        var x = position.getX();
        var y = position.getY();
        if (this.extremes.minX === null || x < this.extremes.minX) {
            this.extremes.minX = x;
        }
        else if (this.extremes.maxX === null || x > this.extremes.maxX) {
            this.extremes.maxX = x;
        }

        if (this.extremes.minY === null || y < this.extremes.minY) {
            this.extremes.minY = y;
        }
        else if (this.extremes.maxY === null || y > this.extremes.maxY) {
            this.extremes.maxY = y;
        }
    },
    /**
     * Trace the polygon
     * @override
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Polygon#
     */
    trace: function(ctx) {
        var first = this.points[0];
        ctx.moveTo(first.getX(), first.getY());

        for (var i = 1, l = this.points.length; i < l; ++i) {
            var p = this.points[i];
            this._checkForExtreme(p);
            ctx.lineTo(p.getX(), p.getY());
        }

        ctx.lineTo(first.getX(), first.getY());
    },
    /**
     * Check if polygon can be animated
     * @override
     * @param {Animation} animation - Any animation
     * @memberOf Polygon#
     */
    animateWith: function(animation) {
        if (this.isLinkedToOthers) {
            throw new ReferenceError("Can't animate polygon with link to other.");
        }
        else {
            this._animateWith(animation);
        }
    },
    /**
     * Get this shape's width
     * @return {Number}
     * @memberOf Polygon#
     */
    width: function() {
        return this.extremes.maxX - this.extremes.minX;
    },
    /**
     * Get this shape's height
     * @return {Number}
     * @memberOf Polygon#
     */
    height: function() {
        return this.extremes.maxY - this.extremes.minY;
    }
});
