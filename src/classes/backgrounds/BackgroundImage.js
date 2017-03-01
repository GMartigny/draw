/**
 *
 * @extends Background
 * @param {String} url -
 * @param {String} fill -
 * @constructor
 */
function BackgroundImage (url, fill) {
    this.image = new Image();
    this.image.src = url;
    this.fill = fill;
}
/**
 *
 * @enum {String}
 * @readonly
 */
BackgroundImage.fillType = {
    noRepeat: "no-repeat",
    repeat: "repeat",
    repeatX: "repeat-x",
    repeatY: "repeat-y",
    stretch: "stretch"
};
Utils.extends(BackgroundImage, Background, {
    /**
     * Build the pattern
     * @param {CanvasRenderingContext2D} ctx - A drawing context
     * @param {Shape} shape - The holding shape
     * @return {CanvasPattern} The pattern or null if the image is not loaded
     * @memberOf BackgroundImage#
     */
    getStyle: function(ctx, shape) {
        var pattern = null;
        if (this.image.width) {
            pattern = ctx.createPattern(this.image, this.fill);
        }

        this.style = pattern;

        return this._getStyle();
    }
});
