const playIcon = document.querySelector(".video__card_play");
const videoCard = document.querySelector(".video__card");
const videoPlayer = document.querySelector(".video__card_player");
playIcon.addEventListener("click", function () {
  videoPlayer.style.display = "block";
  videoPlayer.style.width = "100%";
  videoCard.style.display = "none";
  videoPlayer.play();
});
videoPlayer.addEventListener("pause", function () {
  videoPlayer.style.display = "none";
  videoCard.style.display = "flex";
});