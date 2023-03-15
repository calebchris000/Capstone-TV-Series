import { getComments } from "./api.js";
import { universalCount } from "./count.js";

const count = universalCount();
const commentCount = () => {
  for (let i = 0; i < count; i++) {
    document.addEventListener("click", async (e) => {
      if (e.target.id === `${i}`) {
        const data = await getComments(i);
        const loop = 1;
        for (let i = 0; i <= data.length; i += loop) {
          if (i === data.length) {
            const number = document.querySelector("#number");
            number.textContent = `Comment(s) (${i})`;
          }
        }
      }
    });
  }
};

commentCount();
