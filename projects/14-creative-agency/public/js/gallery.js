document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery__grid-images img");
  const imagePopup = document.getElementById("image-popup");
  const popupImage = document.querySelector(".image-popup__image");
  const closeBtn = document.querySelector(".image-popup__close-btn");
  const prevBtn = document.querySelector(".image-popup__nav-btn--prev");
  const nextBtn = document.querySelector(".image-popup__nav-btn--next");
  const header = document.querySelector("header");
  let currentImageIndex;
  function updatePopupImage(index) {
    currentImageIndex = index;
    popupImage.src = images[currentImageIndex].dataset.src;
    popupImage.onload = function () {
      const imageWidth = popupImage.clientWidth;
      const imageHeight = popupImage.clientHeight;
      closeBtn.style.top = `calc(50% - ${imageHeight / 2 + 20}px)`;
      closeBtn.style.right = `calc(50% - ${imageWidth / 2 + 20}px)`;
    };
  }
  images.forEach(image => {
    image.addEventListener("click", function () {
      updatePopupImage(parseInt(this.dataset.index));
      imagePopup.style.display = "block";
      document.documentElement.style.overflow = "hidden";
      header.style.position = "fixed";
      const headerHeight = header.clientHeight;
      header.style.top = `-${headerHeight}px`;
    });
  });
  function closeImagePopup() {
    imagePopup.style.display = "none";
    document.documentElement.style.overflow = "auto";
    header.style.position = "fixed";
    header.style.top = 0;
  }
  closeBtn.addEventListener("click", function () {
    closeImagePopup();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && imagePopup.style.display === "block") {
      closeImagePopup();
    }
  });
  prevBtn.addEventListener("click", function () {
    updatePopupImage((currentImageIndex - 1 + images.length) % images.length);
  });
  nextBtn.addEventListener("click", function () {
    updatePopupImage((currentImageIndex + 1) % images.length);
  });
});