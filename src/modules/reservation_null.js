import universalCount from './count.js';

const count = universalCount();
setTimeout(() => {
  const loop = 1;
  for (let i = 0; i < count; i += loop) {
    const reservation = document.getElementById(`reserve${i}`);

    reservation.addEventListener('click', () => {
      setTimeout(() => {
        reservation.style.border = 'none';
        reservation.innerHTML = 'Reservation';
      }, 1000);
      reservation.style.border = '3px solid green';
      reservation.innerHTML = 'Two Students';
    });
  }
}, 1000);
