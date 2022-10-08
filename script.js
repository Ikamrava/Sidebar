const hamburgerMenu = document.querySelector(".hamburger");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const  overlay = document.getElementById("overlay");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  container.classList.toggle("active");
  overlay.classList.toggle("hidden");

});
