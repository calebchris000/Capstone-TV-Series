
import { addData } from "./api.js";
const posting = () => {
    form.addEventListener('click', async (e) => {
      if (e.target.classList.contains('submit')) {
        // transition(e);
        await addData(e.target.id[4]);
        // await get();
        document.querySelector('.name').value = '';
    document.querySelector('.text-area').value = '';
      }
    });
  };  
const load = ()=>{
    posting();
};

window.onload = load;
// import './style.css';
// import loadData from './modules/fetch.js';

// const refresh = document.querySelector('.refresh');
// const form = document.querySelector('.submit-form');
// const list = document.querySelector('.scores');

// fetching data
// refresh.addEventListener('click', () => {
//   list.innerHTML = '';
//   loadData();
// });

// Adding data

// export const addData = (event) => {
//   event.preventDefault();

//   const formData = new FormData(form);
//   const data = Object.fromEntries(formData);
//   const jsonData = JSON.stringify(data);

//   fetch(comments, {
//     method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
      
//         item_id: id.toString(),
//         jsonData,
    
//     }),
//   })
// }

// form.addEventListener('submit', addData);
// form.addEventListener('submit', () => {
//   document.querySelector('.name').value = '';
//   document.querySelector('.your-score').value = '';
// });
