import { getMovie } from './api.js';
import universalCount from './count.js';

const count = universalCount();

const latestMovies = async () => {
  const data = await getMovie();
  const cut = data.slice(0, count);
  const sorted = cut.sort((a, b) => b.premiered.slice(0, 4) - a.premiered.slice(0, 4));
  const container = document.querySelector('.container');

  let item = '';

  sorted.forEach((object, index) => {
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

const latest = document.querySelector('.latest');
latest.addEventListener('click', (e) => {
  e.preventDefault();
  latestMovies();
});
// latest.href = renderMovies()
// latest.addEventListener('click', () => renderMovies())
