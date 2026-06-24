document.addEventListener("DOMContentLoaded", function () {
  const testimonialsSwiper = new Swiper(".testimonials__container", {
    slidesPerView: "auto",
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  const partnersSwiper = new Swiper(".partners__container", {
    slidesPerView: "auto",
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});