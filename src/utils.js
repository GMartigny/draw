/**
 * Lends useful functions for the project
 * @type {Object}
 */
var Utils = {
    PI: Math.PI,
    abs: Math.abs,
    sin: Math.sin,
    cos: Math.cos,
    max: function() {
        this.assertLength(arguments, 1);
        return Math.max.apply(Math, Array.prototype.filter.call(arguments, function(x) {
            return x !== null && !isNaN(x);
        }));
    },
    min: function() {
        this.assertLength(arguments, 1);
        return Math.min.apply(Math, Array.prototype.filter.call(arguments, function(x) {
            return x !== null && !isNaN(x);
        }));
    },
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
    noop: function() {},
    /**
     * Create a class prototype from a parent
     * @param {Function} self - An class needing a prototype
     * @param {Function} parent - A parent to draw prototype from
     * @param {Object} override - A map like object with overrides
     */
    extends: function(self, parent, override) {
        if (parent) {
            self.prototype = Object.create(parent.prototype);
            self.prototype.constructor = self;
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
    },
    /**
     * Change an object's property only if value is different
     * @param {Object} obj - Any object
     * @param {String} prop - Name of a property of obj
     * @param {*} value - Any value
     */
    setProperty: function(obj, prop, value) {
        if (obj[prop] !== value) {
            obj[prop] = value;
            return true;
        }
        else {
            return false;
        }
    }
};
