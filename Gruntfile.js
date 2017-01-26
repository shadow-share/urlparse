module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            src: [ 'Gruntfile.js', 'src/*.js' ]
        },
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.js': 'src/<%= pkg.name %>.js'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %>.js <%= grunt.template.today("mm-dd-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': [ 'dist/<%= pkg.name %>.js' ]
                }
            }
        },
        qunit: {
            all: [ 'test/**/*.html' ]
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('gruntify-eslint');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    // Default task(s).
    grunt.registerTask('default', [
        'eslint',
        'babel',
        'uglify',
        'qunit'
    ]);
};
