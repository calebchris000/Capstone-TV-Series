const testAPI = 'https://jsonplaceholder.typicode.com/todos/1';

const getMovieMock = async () => {
  const request = await fetch(testAPI);
  const response = await request.json();

  return response;
};

const postMovieMock = async (userID, title, completed) => {
  const testAPI = 'https://jsonplaceholder.typicode.com/todos/';
  const request = await fetch(testAPI, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: userID,
      title,
      completed,
    }),
  });
  const response = await request.json();

  return response;
};

module.exports = {
  getMovieMock,
  postMovieMock,
};
