module.exports = {
    options:{
        report:'gzip',
        compress:true
    },
    main: {
        files: {
            'dist/ReHttps.min.js': ['src/ReHttps.js']
        }
    }
};