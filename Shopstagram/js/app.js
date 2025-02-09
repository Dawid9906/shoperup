let button = document.getElementById("button");

button.addEventListener("click", function () {
  let modalOverlay = document.querySelector(".z-1");
  let modal = document.querySelector(".z-2");

  modalOverlay.classList.add("d-none");
  modal.classList.add("d-none");
});

let buttonLoadMore = document.getElementById("load-more-button");

buttonLoadMore.addEventListener("click", function () {
  let article = document.getElementById("article");
  article.classList.remove("d-none");
  buttonLoadMore.classList.add("d-none");
});
