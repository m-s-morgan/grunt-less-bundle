var bundle = require('{{insert path to less-bundle}}');

module.exports = function (grunt) {
    grunt.registerMultiTask('less', 'Runs less-bundle', function () {
        bundle(this.data, this.async());
    });
};
