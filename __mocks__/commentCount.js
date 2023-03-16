const getCommentMock = (document, data) => {
  const loop = 1;
  const comment = document.querySelector('.comments');
  for (let i = 0; i < 1; i += loop) {
    data.forEach((element) => {
      const item = `<p>${element.creation_date} ${element.username}: ${element.comment}</p>`;
      comment.insertAdjacentHTML('beforeend', item);
    });
  }
  return comment.childNodes.length;
};

module.exports = getCommentMock;
