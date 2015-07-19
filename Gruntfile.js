module.exports = function(grunt) {
    var options = {
        path: {
            src: "src",
            dist: "dist",
            tmp: "tmp"
        }
    };

    require('load-grunt-config')(grunt, {data: options});

    grunt.registerTask('dev', ['clean', 'jshint', 'uglify']);
};