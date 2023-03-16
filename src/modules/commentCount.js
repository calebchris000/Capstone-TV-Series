import universalCount from './count.js';

const count = universalCount();
const commentCount = () => {
  const loop = 1;
  for (let i = 0; i < count; i += loop) {
    document.addEventListener('click', async (e) => {
      if (e.target.id === `${i}`) {
        setTimeout(() => {
          const comments = document.getElementById('comments');
          const number = document.getElementById('number');
          if (comments.children.length > 0) {
            number.innerHTML = `Comments (${comments.children.length})`;
          } else {
            number.innerHTML = 'Comments (0)';
          }
        }, 2000);
      }
    });
  }
};

commentCount();
