let button = document.getElementById("button");

button.addEventListener("click", function () {
  let z1 = document.querySelector(".z-1");
  let z2 = document.querySelector(".z-2");

  z1.classList.add("d-none");
  z2.classList.add("d-none");
});

let buttonLoadMore = document.getElementById("load-more-button");

buttonLoadMore.addEventListener("click", function () {
  let article = document.getElementById("article");
  article.classList.remove("d-none");
  buttonLoadMore.classList.add("d-none");
});
