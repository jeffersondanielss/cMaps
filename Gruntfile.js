module.exports = function( grunt ) {

  "use strict";

  grunt.initConfig({

    uglify: {
      options: {
        mangle: true
      },
      main: {
        files: {
          'src/map.min.js': ['scripts/map.js']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
}