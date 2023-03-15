const TVAPI = 'https://api.tvmaze.com/shows';
const users = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LHFUkzcDvsXW9NARtYgJ/likes';
const comments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LHFUkzcDvsXW9NARtYgJ/comments';

export const getMovie = async () => {
  const request = await fetch(TVAPI);
  const response = await request.json();

  return response;
};

export const getLikes = async () => {
  const request = await fetch(users);
  const response = await request.json();

  return response;
};

export const postLikes = async (id) => {
  await fetch(users, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: id.toString() }),
  });
};

export const addData = async (id, user, comment) => {
  await fetch(comments, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment,
    }),
  });
};

export const getComments = async (id) => {
  const comments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LHFUkzcDvsXW9NARtYgJ/comments?item_id=${id}`;
  const request = await fetch(comments);
  const response = await request.json();

  return response;
};
