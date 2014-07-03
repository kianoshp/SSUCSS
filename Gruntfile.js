module.exports = function(grunt) {
    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    var config = {
        sass: 'assets/sass',
        css: 'assets/css'
    }

    // Project configuration.
    grunt.initConfig({
        config: config,
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    '<%= config.css %>/style.css': '<%= config.sass %>/style.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['<%= config.sass %>/**/*.scss'],
                tasks: ['sass:dev']
            }
        }              
    });

    // Default task(s).
    grunt.registerTask('default', ['sass', 'watch']);

};