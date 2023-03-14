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

get();

const post =  () => {
  const container = document.querySelector(".container");

  container.addEventListener("click", async (e) => {
    if (e.target.classList.contains("heart")) {
      e.target.style.color = "red";
      await postLikes(e.target.id[4]);
    }
  });
};

post();

const load = () => {
  post();
  get();
};

window.onload = load;
