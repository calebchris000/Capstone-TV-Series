import { addData, getComments } from "./api.js";


const postComment = () => {
  const loop = 1;

  for (let i = 0; i < 6; i += loop) {
    document.addEventListener("click", async (e) => {
      if (e.target.id === "submit" + i) {
        e.preventDefault();
        const userInput = document.querySelector(".name");
        const commentInput = document.querySelector(".text-area");
        let user = userInput.value;
        let comment = commentInput.value
        await addData(i, user, comment);
        userInput.value = ''
        commentInput.value = ''
      }

    });
  }
};

postComment();

const retreiveComments = () => {
  for (let i = 0; i < 6; i++) {
    document.addEventListener("click", (e) => {
      if (e.target.id === `${i}`) {

        setTimeout(async () => {
          const comments = document.getElementById("comments");
          const data = await getComments(i);
          data.forEach((element) => {
            let item = `<p>${element.creation_date} ${element.username}: ${element.comment}</p>`;
            comments.insertAdjacentHTML("beforeend", item);
          });

        }, 1000);

      }
    });
  }
};
retreiveComments()

