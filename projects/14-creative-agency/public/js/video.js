document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.querySelector(".play-button");
  const videoPopup = document.getElementById("video-popup");
  const popupVideo = document.querySelector(".video-popup__content video");
  const closeBtn = document.querySelector(".video-popup__close-btn");
  const header = document.querySelector("header");
  function openVideoPopup() {
    videoPopup.style.display = "block";
    document.documentElement.style.overflow = "hidden";
    header.style.position = "fixed";
    const headerHeight = header.clientHeight;
    header.style.top = `-${headerHeight}px`;
    popupVideo.play();
  }
  function closeVideoPopup() {
    videoPopup.style.display = "none";
    document.documentElement.style.overflow = "auto";
    header.style.position = "fixed";
    header.style.top = 0;
    popupVideo.pause();
    popupVideo.currentTime = 0;
  }
  function handleVideoEnded() {
    closeVideoPopup();
  }
  function handleKeyDown(event) {
    if (event.keyCode === 27) {
      closeVideoPopup();
    }
  }
  playButton.addEventListener("click", openVideoPopup);
  closeBtn.addEventListener("click", closeVideoPopup);
  popupVideo.addEventListener("ended", handleVideoEnded);
  document.addEventListener("keydown", handleKeyDown);
});