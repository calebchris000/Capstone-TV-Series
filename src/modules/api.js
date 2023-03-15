const TVAPI = 'https://api.tvmaze.com/shows';
const users = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RTGQ21pCnTErDACymSN1/likes';
const comments = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RTGQ21pCnTErDACymSN1/comments";
const form = document.querySelector('.submit-form');

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



  export const addData = async(id) => {
    e.preventDefault();
  
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const jsonData = JSON.stringify(data);
  
    fetch(comments, {
      method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
          item_id: id.toString(),
          jsonData,
      
      }),
    })
  }


  export const getComments = async () => {
    const request =await fetch(comments);
    const response = await request.json();
  
    return response;
  }



