/**
 * An arc shape between two points
 * @extends Shape
 * @param {Position|Shape} position - Its position on the scene
 * @param {Number} radius - The radius of the arc (in pixel)
 * @param {Number} [startAngle=0] - The angle from to start the arc (in radian, 0 is north)
 * @param {Number} [endAngle=PI] - The angle where to end the arc (in radian, 0 is north)
 * @param {Boolean} [clockwise=false] - The direction of rotation is clockwise (false for anti-clockwise)
 * @param {ShapeOptions} [options] - Specific options for this shape
 * @constructor
 */
function Arc (position, radius, startAngle, endAngle, clockwise, options) {
    Utils.assertLength(arguments, 2);

    Shape.call(this, position, options);
    this.radius = radius;
    this.startAngle = startAngle || 0;
    this.endAngle = endAngle || Utils.PI;
    this.clockwise = !!clockwise;
}
Utils.extends(Arc, Shape, {
    /**
     * Trace the arc
     * @override
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @memberOf Arc#
     */
    trace: function(ctx) {
        var x = this.position.getX();
        var y = this.position.getY();
        var strokeOffset = this.options.fillColor ? (this.options.strokeWidth || 1) / 2 : 0;
        ctx.arc(x, y, this.radius + strokeOffset, this.startAngle, this.endAngle, !this.clockwise);
    }
});
