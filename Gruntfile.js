module.exports = function(grunt) {

    require("jit-grunt")(grunt, {
        jsdoc2md: "grunt-jsdoc-to-markdown"
    });

    var banner = "/** Copyright (c) 2017 Guillaume Martigny - MIT License - v<%= pkg.version %> */\n\n";

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            concat: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false,
                    preserveComments: "all",
                    banner: banner
                },
                files: {
                    "pencil.js": ["src/utils.js", "src/classes/**/*.js"]
                }
            },
            minify: {
                options: {
                    banner: banner
                },
                files: {
                    "pencil.min.js": ["src/utils.js", "src/**/*.js"]
                }
            }
        },

        jsdoc2md: {
            "DOCUMENTATION.md": "src/classes/**/*.js",
            options: {
                "example-lang": "js"
            }
        },

        bump: {
            options: {
                updateConfigs: ["pkg"],
                pushTo: "origin"
            }
        }
    });

    grunt.registerTask("jsdoc", ["jsdoc2md"]);

    grunt.registerTask("default", ["uglify:concat", "uglify:minify", "jsdoc"]);

    grunt.registerTask("patch", ["bump:patch"]);
    grunt.registerTask("minor", ["bump:minor"]);
    grunt.registerTask("major", ["bump:major"]);
};