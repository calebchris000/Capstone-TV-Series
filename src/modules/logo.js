import LOGO from '../logos/logo.png';

const menu = document.querySelector('.menu');
const img = document.createElement('img');
img.className = 'logo';
img.src = LOGO;
menu.prepend(img);
