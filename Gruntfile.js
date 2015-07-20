module.exports = function(grunt) {
    var options = {
        path: {
            src: "src",
            dist: "dist",
            release: "release",
            tmp: "tmp"
        }
    };

    require('load-grunt-config')(grunt, {data: options});

    grunt.registerTask('dist', ['clean:dist', 'jshint', 'uglify:dist']);
    grunt.registerTask('release', ['clean:release', 'jshint', 'uglify:release']);
};