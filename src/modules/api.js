const TVAPI = "https://api.tvmaze.com/shows";
const users =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/";

export const getMovie = async () => {
  const request = await fetch(TVAPI);
  const response = await request.json();

  return response;
};

const getComment = async () => {
  const request = await fetch(users);
  const response = await request.json();

  return response;
};
