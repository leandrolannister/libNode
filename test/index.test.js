const file = require('../File.js');

let f = new file();

test('Should be object', () => {
  expect(typeof f.readFile_2()).toBe('object');
});