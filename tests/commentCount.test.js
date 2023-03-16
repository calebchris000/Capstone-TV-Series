/*eslint-disable */
const jsdom = require('jsdom');
const getCommentMock = require('../__mocks__/commentCount.js');

const { JSDOM } = jsdom;

describe('Testing the comment counter', () => {
  const data = [
    { comment: 'Nice', creation_date: '2023-03-15', username: 'C' },
    { comment: 'Great movie!', creation_date: '2023-03-15', username: 'Mark' },
    {
      comment: 'nice to look at this',
      creation_date: '2023-03-16',
      username: 'ikoote',
    },
    {
      comment: 'nice to look at this',
      creation_date: '2023-03-16',
      username: 'ikoote',
    },
  ];
  const dom = new JSDOM('<div class="comments"></div>');
  const { document } = dom.window;

  test('Should return 4', () => {
    const item = getCommentMock(document, data);
    expect(item).toEqual(4);
  });
});