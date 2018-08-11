module.exports = function(grunt){
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'srv/css/style.css': '_Build/sass/global.scss'
                }
            }
        },
        php: {
            dist: {
                options: {
                    hostname: 'localhost',
                    port: 8000,
                    base: 'srv/',
                    keepalive: true,
                    open: true
                }
            },
            watch: {
                options: {
                    hostname: 'localhost',
                    port: 8000,
                    base: 'srv/',
                    keepalive: true,
                    open: true
                }
            }
        },
        watch: {
            css: {
                files: '_Build/sass/**/*.scss',
                tasks: ['sass'],
                options: {
                    reload: true
                }
            }
        },
        concurrent: {
            dev: {
                tasks: [
                    'watch',
                    'php:watch'            
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', [
        'concurrent:dev',
    ]);
}
