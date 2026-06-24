let menu = document.querySelector("#menu-bars");
let nav = document.querySelector(".nav");
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
});