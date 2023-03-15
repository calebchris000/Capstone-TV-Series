
import { getComments,addData } from "./api.js";

const addComm = () => {
    form.addEventListener('click', async (e) => {
      if (e.target.classList.contains('submit')) {
        await addData(e.target.id[4]);
        document.querySelector('.name').value = '';
    document.querySelector('.text-area').value = '';
      }
    });
  };  

 
  function  addComment() {
    const comments = document.querySelector('.comments');
    const list = document.createElement('div');
    list.innerHTML = `
    <p>${res.creation_date} ${res.username}: ${res.comment}</p>
    `
    comments.appendChild(list);
   }

  const displayComments = async (id) => {
    const com = await getComments();
    com.forEach(res => addComment(res));
  }

  window.onload = displayComments();
  addComm();

