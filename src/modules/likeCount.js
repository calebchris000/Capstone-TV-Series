import { postLikes, getLikes } from "./api.js";

const get = async () => {
  const data = await getLikes();
  for (let i = 0; i < 6; i++) {
    if (document.body.querySelector(`#count${i}`)) {
      let like = document.querySelector(`#count${i}`);
      like.textContent = `${data[i].likes} likes`;
    }
  }
};

const post = () => {
  const container = document.querySelector(".container");

  container.addEventListener("click", async (e) => {
    if (e.target.classList.contains("heart")) {
      transition(e);
      await postLikes(e.target.id[4]);
      await get();
    }
  });
};

const transition = (e) => {
  setTimeout(() => {
    e.target.style.color = "white";
  }, 1000);
  e.target.style.color = "red";
};

const load = () => {
  post();
  get();
};

window.onload = load;
