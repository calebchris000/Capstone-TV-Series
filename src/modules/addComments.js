
import { addData } from "./api.js";



const addComm = () => {
    const form = document.querySelector('.submit-form');
    form.addEventListener('click', async () => {
      if (e.target.classList.contains('submit')) {
        e.preventDefault();
        user =  document.querySelector('.name').value;
        comment = document.querySelector('.text-area').value;
        await addData(1);
      }
    });
  };  

 
  const addComment = (res) => {
    const comments = document.querySelector('.comments');
    const list = document.createElement('div');
    list.innerHTML = `
    <p>${res.creation_date} ${res.username}: ${res.comment}</p>
    `
    comments.appendChild(list);
   }

  const displayComments = async () => {
    const com = await getComments();
    com.forEach(res => addComment(res));
  }

  window.onload = displayComments();
  window.onload = addComm();

