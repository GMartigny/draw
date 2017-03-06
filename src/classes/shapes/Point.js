function Point (position, options) {
    Utils.assertLength(arguments, 1);
    Shape.call(this, position, options);
}
Utils.extends(Point, Shape, {
    trace: function() {},
    width: function() {
        return 0;
    },
    height: function() {
        return 0;
    }
});