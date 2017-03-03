/**
 * Lends useful functions for the project
 * @type {Object}
 */
var Utils = {
    PI: Math.PI,
    abs: Math.abs,
    sin: Math.sin,
    cos: Math.cos,
    max: Math.max,
    min: Math.min,
    sq: function(x) {
        return Math.pow(x, 2);
    },
    sqrt: Math.sqrt,
    rand: Math.random,
    floor: function(x) {
        return x | 0;
    },
    round: function(x) {
        return this.floor(x + 0.5);
    },
    ceil: function(x) {
        return this.floor(x + 1);
    },
    random: function(max) {
        return this.round(this.rand() * max);
    },
    /**
     * Create a class prototype from a parent
     * @param {Function} self - An class needing a prototype
     * @param {Function} parent - A parent to draw prototype from
     * @param {Object} override - A map like object with overrides
     */
    extends: function(self, parent, override) {
        if (parent) {
            self.prototype = Object.create(parent.prototype);
        }
        if (override) {
            for (var func in override) {
                if (override.hasOwnProperty(func)) {
                    if (self.prototype[func]) {
                        self.prototype["_" + func] = self.prototype[func];
                    }
                    self.prototype[func] = override[func];
                }
            }
        }
    },
    /**
     * Throw an exception if an array is too short (used for arguments length)
     * @param {Array} array The array to mesure
     * @param {Number} asserted The minimal asserted length
     * @throws {TypeError} An error if array is too short
     */
    assertLength: function(array, asserted) {
        if (array.length < asserted) {
            throw new TypeError("Awaiting at least " + asserted + " arguments, only found " + array.length);
        }
    }
};
