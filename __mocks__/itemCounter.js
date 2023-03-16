/*eslint-disable */
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const data = `<div class="movieCount">
<p class='movie'>One</p>
<p class='movie'>One</p>
<p class='movie'>One</p>
<p class='movie'>One</p>
<p class='movie'>One</p>
<p class='movie'>One</p>
<p class='movie'>One</p>
<p class='movie'>One</p>
<p class='movie'>One</p>
<p class='movie'>One</p>
</div>`;

const dom = new JSDOM(data);
const { document } = dom.window;

const countMovies = () => {
  const movieCount = document.querySelector('.movieCount');
  const movies = document.querySelectorAll('.movie');
  movieCount.innerHTML = movies.length;
  return movies.length;
};

module.exports = countMovies;
