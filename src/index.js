import './style.css';
import './modules/movieList.css';
import './modules/popup.css';

require('./modules/movieList.js');
require('./modules/comment.js');
require('./modules/likeCount.js');
// require('./modules/addComments.js');


const comments = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RTGQ21pCnTErDACymSN1/comments";
const form = document.querySelector('.submit-form');
  const addData = async(id) => {
    e.preventDefault();
  
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const jsonData = JSON.stringify(data);
  
    fetch(comments, {
      method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
          item_id: id.toString(),
          jsonData,
      
      }),
    })
  }

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
