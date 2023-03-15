import { getComments } from "./api.js";

const commentCount = () =>{
    for (let i = 0; i < 6; i++) {
      document.addEventListener("click", (e) => {
        if (e.target.id === `${i}`) {
  
          setTimeout(async () => {
            const data = await getComments(i);
            const loop = 1;
            for (let i = 0; i <= data.length; i += loop) {
              if ( i === data.length) {
                const number = document.querySelector('#number');
                number.textContent = `Comment(s) (${i})`;
              } }
  
          }, 0);
  
        }
      });
   
    }
  }
  
  commentCount();