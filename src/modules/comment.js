import { getMovie } from "./api.js";
const populatePopup = async (i) => {
  const popup = document.querySelector(".popup");
  const data = await getMovie();
  let item = `
  <i class="cancel fa-solid fa-xmark"></i>
  <img class='popupImg' src="${data[i].image.original}"</img>
  <p class='popupName'>${data[i].name}</p>
  <div class="synopsis">${data[i].summary}</div>
  <div class="metadata">
  <p>Language: ${data[i].language}</p>
  <p>Release: ${data[i].premiered.slice(0, 4)}</p>
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
      document.body.style.overflow = 'hidden'
      populatePopup(i);
    });
  }
};

displayPopup();

const cancel = async () => {
  const popup = document.querySelector(".popup");

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("cancel")) {
     popup.innerHTML = ''
     popup.style.display = 'none'
     document.body.style.overflow = 'auto'
    }
  });
};

cancel()
