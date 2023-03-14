const TVAPI = "https://api.tvmaze.com/shows";
const users =
"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RTGQ21pCnTErDACymSN1/likes";

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
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({item_id: id.toString() }),
  });
};
