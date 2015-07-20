module.exports = {
    options: {
        "strict": true,
        "browser": true,

        "eqeqeq": true,
        "immed": true,
        "newcap": true,

        "maxparams": 4,
        "maxdepth": 3,
        "maxstatements": 15,
        "maxcomplexity": 6
    },
    sources: ["<%= path.src %>/**/*.js"]
};