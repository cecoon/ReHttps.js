module.exports = {
    options:{
        report:'gzip',
        compress:true
    },
    dist: {
        files: {
            'dist/ReHttps.min.js': ['src/ReHttps.js']
        }
    },
    release: {
        files: {
            'release/ReHttps.min.js': ['src/ReHttps.js']
        }
    }
};