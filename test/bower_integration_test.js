'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.bower_integration = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  DL_jQ: function(test) {
    test.expect(2);

    var dirExists=grunt.file.exists('bower_components/jQuery');
    var jqLicenseFileExists=grunt.file.exists('bower_components/jQuery/LICENSE.txt');

    test.ok(dirExists, 'The jQuery repo seems to have been downloaded into the bower_components/jQuery directory');
    test.ok(jqLicenseFileExists, 'The jQuery license file seems to have been downloaded into the bower_components/jQuery directory');

    test.done();
  }
};
