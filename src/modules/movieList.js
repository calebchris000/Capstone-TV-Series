import { getMovie } from './api.js';
import universalCount from './count.js';

const count = universalCount();
const countMovies = () => {
  const movieCount = document.querySelector('.movieCount');

  setTimeout(() => {
    const movies = document.querySelectorAll('.movie');
    movieCount.innerHTML = movies.length;
  }, 1000);
};

countMovies();

const renderMovies = async () => {
  const data = await getMovie();
  const cut = data.slice(0, count);
  const container = document.querySelector('.container');

  let item = '';

  cut.forEach((object, index) => {
    item += `<div class="movie ">
        <img class='posters' src="${object.image.medium}">
        <span class='nameHeart'>
         <p class="movieTitle">${object.name}</p>
         <i class="heart fa-regular fa-heart" id='like${index}'></i>
        </span>
        <p class="likeCount" id='count${index}'></p>

        <button class="comment" id="${index}">Comment</button>
        <button class="reservation" id='reserve${index}'>Reservation</button>
       
    </div>`;
  });

  container.innerHTML = item;
};

renderMovies();
