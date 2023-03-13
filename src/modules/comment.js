import { getMovie } from "./api.js";
const populatePopup = async (i) => {
  const popup = document.querySelector(".popup");
  const data = await getMovie();
  let item = 
  `<img class='popupImg' src="${data[i].image.original}"</img>
  <p class='popupName'>${data[i].name}</p>
  <div class="synopsis">${data[i].summary}</div>
  <div class="metadata">
  <p>Language: ${data[i].language}</p>
  <p>Release: ${data[i].premiered.slice(0,4)}</p>
  <p>Genres: ${data[i].genres}</p>
  <p>Rating: ${data[i].rating.average}</p>
  </div>
  
  `;

  popup.innerHTML = item;
};

const displayPopup = async () => {
  const popup = document.querySelector(".popup");
  const data = await getMovie();

  for (let i = 0; i < 6; i++) {
    const comment = document.getElementById(i);

    comment.addEventListener("click", () => {
      popup.style.display = "flex";
      populatePopup(i);
    });
  }
};

displayPopup();
