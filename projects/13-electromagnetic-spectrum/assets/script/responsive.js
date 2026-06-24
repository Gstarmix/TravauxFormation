const imgBar = document.querySelector(".header__imgBar");
function changeImage() {
  if (this.innerWidth > 1500) {
    imgBar.src = "assets/images/bar1.png";
  } else if (this.innerWidth > 700) {
    imgBar.src = "assets/images/bar2.png";
  } else {
    imgBar.src = "assets/images/bar3.png";
  }
}
changeImage();
window.addEventListener("resize", changeImage);