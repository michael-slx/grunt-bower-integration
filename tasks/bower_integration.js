/*
 * grunt-bower-integration
 *
 *
 * Copyright (c) 2017 Michael Schantl
 * Licensed under the MIT license.
 */

'use strict';

const bower = require('bower');
const path = require('path');

module.exports = function(grunt) {

  grunt.registerMultiTask('bower_integration', 'Installs bower components without a bower.json file', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({

    });

    var dependencies = [];
    if (this.data.dependencies) {
      dependencies=this.data.dependencies;
    }

    var done=this.async();

    bower.commands
    .install(dependencies, options)
    .on('end', function(installed) {
      done(true);
    })
    .on('error', function(error) {
      done(error);
    });

  });

};
