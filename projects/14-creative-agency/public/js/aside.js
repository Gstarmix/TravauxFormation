const pricesElement = document.querySelectorAll(".slider__prices");
const sliderElement = document.querySelector(".slider");
const aboutElement = document.querySelector(".about");
const videoElement = document.querySelector(".video");
const sidebarElement = document.querySelector(".sidebar");
const containerElement = document.querySelector(".container");
function moveElements() {
  if (window.innerWidth <= 1024) {
    aboutElement.insertBefore(pricesElement[0], aboutElement.children[2]);
    containerElement.insertBefore(videoElement, containerElement.children[3]);
  } else {
    sliderElement.insertBefore(pricesElement[0], sliderElement.lastChild);
    sidebarElement.insertBefore(videoElement, sidebarElement.children[2]);
  }
}
window.addEventListener("resize", moveElements);
document.addEventListener("DOMContentLoaded", moveElements);