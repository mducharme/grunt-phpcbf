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

exports.phpcbf = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  psr2: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/psr2.php');
    var expected = grunt.file.read('test/expected/psr2.php');
    test.equal(actual, expected, 'psr2 file is not what expected');

    test.done();
  },
  custom: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom.php');
    var expected = grunt.file.read('test/expected/custom.php');
    test.equal(actual, expected, 'custom file is not what expected');

    test.done();
  },
};
