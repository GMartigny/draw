module.exports = function(grunt) {

    require("jit-grunt")(grunt);

    var banner = "/** Copyright (c) 2017 Guillaume Martigny - MIT License - v<%= pkg.version %> */\n\n";

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        uglify: {
            normal: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false,
                    preserveComments: "all",
                    banner: banner
                },
                files: {
                    "drawLib.js": ["src/Utils.js", "src/classes/**/*.js"]
                }
            },
            minify: {
                options: {
                    banner: banner
                },
                files: {
                    "drawLib.min.js": ["src/Utils.js", "src/**/*.js"]
                }
            }
        },

        bump: {
            options: {
                updateConfigs: ["pkg"],
                pushTo: "origin"
            }
        },

        git_deploy: {
            release: {
                options: {
                    url: "https://github.com/GMartigny/drawLib.git",
                    branch: "release",
                    message: "Update to v<%= pkg.version %>"
                }
            }
        }
    });

    grunt.registerTask("default", ["uglify:normal", "uglify:minify"]);

    grunt.registerTask("patch", ["bump:patch", "git_deploy:release"]);
    grunt.registerTask("minor", ["bump:minor", "git_deploy:release"]);
    grunt.registerTask("major", ["bump:major", "git_deploy:release"]);
};