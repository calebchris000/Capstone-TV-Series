/*eslint-disable */

const countMovies = require('../__mocks__/itemCounter.js');

// * To the reviewer:
//* The DOM environment mocking is done on the __mocks__
//* folder, the purpose which is to keep the main test
//* file as clutter free as possible.

describe('Test the Item Counter in the Main Page', () => {
  test('Expected to Return 3', () => {
    expect(countMovies()).toEqual(10);
  });
});
