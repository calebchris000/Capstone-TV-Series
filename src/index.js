import './style.css';
import './modules/movieList.css';
import './modules/popup.css';

require('./modules/movieList.js');
require('./modules/comment.js');
require('./modules/likeCount.js');


fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
