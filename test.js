var test = require('tape')
var numberify = require('./numberify.js')

test('random case and 3 digit number return number itself', function (t) {
  t.equal(numberify('admin', 666), 666);
  t.end();
});

test('hoodie case with 2 digit number returns padded number', function (t) {
  t.equal(numberify('hoodie', 66), '066');
  t.end();
});

// test('tech case with < 500 number returns number+500', function (t) {
//   t.equal(numberify('tech', 499), 666);
//   t.end();
// })
