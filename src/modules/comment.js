import { getMovie } from './api.js';
import universalCount from './count.js';

const count = universalCount();
const populatePopup = async (i) => {
  const popup = document.querySelector('.popup');
  const data = await getMovie();
  const item = `
  
  <div class='popupItems'>
  <i class="cancel fa-solid fa-xmark"></i>
  <div class="imgName">
  <img class='popupImg' src="${data[i].image.original}"</img>
  <p class='popupName'>${data[i].name}</p>
  </div>
  <div class="synopsis">${data[i].summary}</div>
  <div class="metadata">
  <p>Language: ${data[i].language}</p>
  <p>Release: ${data[i].premiered.slice(0, 4)}</p>
  <p>Genres: ${data[i].genres}</p>
  <p>Rating: ${data[i].rating.average}</p>
  <p>Runtime: ${data[i].runtime} min</p>
  <p class="site">Official site: <a href="${
  data[i].officialSite
}">Click here</a> </p>
  </div>
        <h2 id="number">Comment</h2>
        
  <div id='comments' class="comments"> </div>

            <div class="enter-comments">
                <h2>Add a Comment</h2>
                <form action="" class="submit-form">
                    <input type="text" name="username" class="name" placeholder="Your Name" required>
                    <textarea name="comment" id="comm" class="text-area" placeholder="Your Insights" required></textarea>
                    <button type="button" id='submit${i}' class="submit">Comment</button>
                </form>
            </div>
            </div>
  
  `;

  popup.innerHTML = item;
};

const displayPopup = () => {
  const popup = document.querySelector('.popup');
  const container = document.querySelector('.container');
  const loop = 1;
  for (let i = 0; i < count; i += loop) {
    container.addEventListener('click', (e) => {
      if (e.target.id === `${i}`) {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        populatePopup(i);
      }
    });
  }
};

displayPopup();

const cancel = async () => {
  const popup = document.querySelector('.popup');

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('cancel')) {
      popup.innerHTML = '';
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
};

cancel();
