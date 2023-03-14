const TVAPI = "https://api.tvmaze.com/shows";

export const getMovie = async () => {
  const request = await fetch(TVAPI);
  const response = await request.json();

  return response;
};

export const getLikes = async () => {
  const users =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VM7kTFPGN3ap0GuV7EM3/likes";
  const request = await fetch(users);
  const response = await request.json();

  return response;
};
