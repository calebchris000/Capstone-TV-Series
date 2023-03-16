const { getMovieMock, postMovieMock } = require('../__mocks__/apiMock.js');

describe('Testing the API Request and response', () => {
  test('Retrieving data from the API', async () => {
    const data = await getMovieMock();

    expect(data.title).toEqual('delectus aut autem');
  });

  test('Posting data to the API', async () => {
    const post = await postMovieMock(1, 'Hello World', false);

    expect(post.title).toEqual('Hello World');
    expect(post.userId).toEqual(1);
    expect(post.completed).toBeFalsy();
  });
});
