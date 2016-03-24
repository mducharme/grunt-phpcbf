/*
 * grunt-phpcbf
 * https://github.com/mducharme/grunt-phpcbf
 *
 * Based on grunt-phpcs, by Sascha Galley
 * https://github.com/SaschaGalley/grunt-phpcs
 *
 * Copyright (c) 2015 Mathieu Ducharme
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var path = require('path');
  var exec = require('child_process').exec;
    
  var command = {
    flags: {
      verbose: 'v',
      noPatch: '-no-patch',
      ignoreWarnings: 'n'
    },
    options: {
      errorSeverity: 'error-severity',
      severity: 'severity',
      standard: 'standard',
      warningSeverity: 'warning-severity',
      tabWidth: 'tab-width'
    }
  };
  var defaults = {
    bin: 'phpcbf',
    maxBuffer: 200*1024,
    noPatch: true,
    ignoreWarnings: true
  };
  var done = null;
    
  grunt.registerMultiTask('phpcbf', 'Run PHP Code Beautifier and Fixer', function()
  {
      var done = null,
          parameters = null,
          target = this.target,
          options = this.options(defaults),
          execute = path.normalize(options.bin),
          files = [].concat.apply([], this.files.map(function(mapping) { return mapping.src; })).sort();
      
      grunt.verbose.writeln('Executing: ' + files);

      // removes duplicate files
      files = files.filter(function(file, position) { 
          return !position || file !== files[position - 1];
      });
      
      // generates parameters
      parameters = Object.keys(options).map(function(option) {
          if(option in command.flags && options[option] === true) {
            return '-' + command.flags[option];
          }
          else if(option in command.options && options[option] !== undefined) {
            return '--' + command.options[option] + '=' + options[option];
          }
          else {
            return null;
          }
      }).filter(Boolean);
      
      execute += ' ' + parameters.join(' ') + ' "' + files.join('" "') + '"';
      
      grunt.verbose.writeln('Executing: ' + execute);
      
      done = this.async();
      
      exec(execute, {maxBuffer: options.maxBuffer}, function(error, stdout, stderr) {
          /* jshint -W030 */
          if(typeof options.callback === 'function') {
            options.callback.call(this, error, stdout, stderr, done);
          }
          if(stdout) {
            grunt.log.write(stdout);
          }
          if(error) {
            grunt.log.ok(stderr ? stderr : 'Task phpbcf:' + target + ' failed.');
          }
          else {
            grunt.log.ok(files.length + ' file' + (files.length === 1 ? '' : 's') + ' lint free.');
          }
          done(0);
      });
  });

};
