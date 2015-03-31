# grunt-phpcbf

> Grunt plugin for running phpcbf (PHP Code Beautifier and Fixer)

This plugin is heavily based on `grunt-phpcs` by Sascha Galley.
https://github.com/SaschaGalley/grunt-phpcs

phpcbf is an automatic code-fixer based on PHP CodeSniffer.
https://github.com/squizlabs/PHP_CodeSniffer/wiki/Fixing-Errors-Automatically

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-phpcbf --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-phpcbf');
```

## The "phpcbf" task

### Overview
In your project's Gruntfile, add a section named `phpcbf` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  phpcbf: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

```js
grunt.initConfig({
  phpcbf: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```
###Options

#### bin
Type: `String`  Default: `'phpcbf'`

#### maxBuffer
Type: `Number` Default: `200*1024`

Set the buffer size.

#### verbose
Type: `Boolean` Default: `false`

Output more verbose information.

#### noPatch
Type: `Boolean` Default: `true`

Do not create a patch file.

#### severity
Type: `Integer` Default: `false`

The minimum severity required to display an error or warning.

#### warningSeverity
Type: `Integer` Default: `false`

The minimum severity required to display a warning.

#### errorSeverity
Type: `Integer` Default: `false`

The minimum severity required to display an error.

#### standard
Type: `String`  Default: `false`

Define the standard to use. This can either be a _builtin_ standard like `PSR1`, `PSR2` or `PEAR` or a XML file
containing a ruleset.

Log report to the file.

#### tabWidth
Type: `Integer` Default: `false`

Automatically convert tabs to the specified number of spaces when sniffing.


### Custom callback

Do whatever you want with the output.

```js
function log(err, stdout, stderr, callback) {
  console.log(stdout);
  callback();
}
grunt.initConfig({
  phpcbf: {
    app: {
      src: ['src/**/*.php', 'tests/**/*.php']
    },
    options: {
      callback: log
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
