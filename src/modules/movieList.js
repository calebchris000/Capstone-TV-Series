import { getMovie } from "./api.js";

const renderMovies = async () => {
  const data = await getMovie();
  const cut = data.slice(0,6)
  const container = document.querySelector(".container");

  let item = "";

  cut.forEach((object, index) => {
    item += `<div class="movie">
        <img class='posters' src="${object.image.medium}">
        <span class='nameHeart'>
         <p class="movieTitle">${object.name}</p>
         <i class="heart fa-regular fa-heart"></i>
        </span>
        <p class="likeCount">5 likes</p>

        <button class="comment">Comment</button>
        <button class="reservation">Comment</button>
       
    </div>`;
  });

  container.innerHTML = item
};

renderMovies();
