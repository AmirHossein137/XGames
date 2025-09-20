if (window.innerWidth < 1280) {
  var swiper = new Swiper(".subscription", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
    },
  });
}
