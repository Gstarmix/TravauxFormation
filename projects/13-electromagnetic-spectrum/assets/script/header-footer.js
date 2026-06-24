const nav = document.querySelector("[data-nav]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    nav.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    nav.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
const moveList = document.querySelectorAll(".move");
if (moveList.length > 0) {
  window.onmousemove = function (e) {
    let x = -e.clientX / 5,
      y = -e.clientY / 5;
    for (let i = 0; i < moveList.length; i++) {
      moveList[i].style.backgroundPositionX = x + "px";
      moveList[i].style.backgroundPositionY = y + "px";
    }
  };
}
const burger = document.querySelector(".header__nav_burger");
const ul = document.querySelector(".header__nav_ul");
burger.addEventListener("click", () => {
  const isOpen = ul.classList.toggle("showUl");
  burger.setAttribute("aria-expanded", String(isOpen));
  burger.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  burger.classList.toggle("is-active", isOpen);
});