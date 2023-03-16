import { addData, getComments } from './api.js';
import universalCount from './count.js';

const count = universalCount();

const postComment = () => {
  const loop = 1;

  for (let i = 0; i < count; i += loop) {
    document.addEventListener('click', async (e) => {
      if (e.target.id === `submit${i}`) {
        e.preventDefault();
        const userInput = document.querySelector('.name');
        const commentInput = document.querySelector('.text-area');
        await addData(i, userInput.value, commentInput.value);
        userInput.value = '';
        commentInput.value = '';
        setTimeout(() => window.location.reload(), 500);
      }
    });
  }
};

postComment();

const retreiveComments = () => {
  const loop = 1;
  for (let i = 0; i < count; i += loop) {
    document.addEventListener('click', (e) => {
      if (e.target.id === `${i}`) {
        setTimeout(async () => {
          const comments = document.getElementById('comments');
          const data = await getComments(i);
          if (Array.isArray(data)) {
            data.forEach((element) => {
              const item = `<p>${element.creation_date} ${element.username}: ${element.comment}</p>`;
              comments.insertAdjacentHTML('beforeend', item);
            });
          }
        }, 1000);
      }
    });
  }
};

retreiveComments();
