import { postLikes, getLikes } from './api.js';
import universalCount from './count.js';

const count = universalCount();

const get = async () => {
  const data = await getLikes();
  const loop = 1;
  for (let i = 0; i < count; i += loop) {
    if (document.body.querySelector(`#count${i}`)) {
      const like = document.querySelector(`#count${i}`);
      const correctKey = data.filter((x) => x.item_id === i.toString());
      if (correctKey[0] !== undefined) {
        like.textContent = `${correctKey[0].likes} likes`;
      } else {
        like.textContent = '0 likes';
      }
    }
  }
};

const transition = (e) => {
  setTimeout(() => {
    e.target.style.color = 'white';
  }, 1000);
  e.target.style.color = 'red';
};

const post = () => {
  setTimeout(() => {
    const loop = 1;
    for (let i = 0; i < count; i += loop) {
      const heart = document.querySelector(`#like${i}`);
      heart.addEventListener('click', async (e) => {
        transition(e);
        await postLikes(i);
        await get();
      });
    }
  }, 1000);
};

const load = () => {
  post();
  get();
};

window.onload = load;
