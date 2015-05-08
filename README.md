# grunt-less-bundle

A grunt task for running [less-bundle](https://github.com/Platypi/less-bundle)

## Example

```js
grunt.initConfig({
  less: {
    main: {
        license: './license.txt',
        version: '<%= pkg.version %>',
        src: './main.less',
        dest: [
            './out.less'
        ]
    }
  },
  pkg: grunt.file.readJSON('package.json')
});

grunt.loadNpmTasks('grunt-less-bundle');
```
