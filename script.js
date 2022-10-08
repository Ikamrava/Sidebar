const hamburgerMenu = document.querySelector(".hamburger");
const container = document.querySelector(".container");
const body = document.querySelector("body");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  container.classList.toggle("active");
});
