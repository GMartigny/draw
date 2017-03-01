module.exports = function(grunt) {

    require("jit-grunt")(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        uglify: {
            normal: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false,
                    preserveComments: "all"
                },
                files: {
                    "drawLib.js": ["src/Utils.js", "src/classes/**/*.js"]
                }
            },
            minify: {
                options: {
                },
                files: {
                    "drawLib.min.js": ["src/Utils.js", "src/**/*.js"]
                }
            }
        }
    });

    grunt.registerTask("default", ["uglify:normal", "uglify:minify"]);

};