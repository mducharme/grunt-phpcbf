/*
 * grunt-phpcbf
 * https://github.com/mducharme/grunt-phpcbf
 *
 * Based on grunt-phpcs, by Sascha Gallery
 * https://github.com/SaschaGalley/grunt-phpcs
 *
 * Copyright (c) 2015 Mathieu Ducharme
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    
    clean: {
      tests: ['tmp']
    },

    copy: {
      main: {
        files: [
          {src: ['test/test.php'], dest: 'tmp/psr2.php'},
          {src: ['test/test.php'], dest: 'tmp/custom.php'},
        ],
      },
    },

    phpcbf: {
        psr2: {
          src: ['tmp/psr2.php'],
          options: {
            bin: 'vendor/bin/phpcbf',
            standard: 'PSR2'
          }
        },
        custom: {
          src: ['tmp/custom.php'],
          options: {
            bin: 'vendor/bin/phpcbf',
            standard: 'test/standard.xml'
          }
        }
    },

    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'copy', 'phpcbf', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);

};
