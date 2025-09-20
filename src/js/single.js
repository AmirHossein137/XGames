document.addEventListener("DOMContentLoaded", function () {
  /*** HSOverlay ***/
  window.HSOverlay?.autoInit();

  /*** Capacity ***/
  const updateActiveClass = () => {
    document.querySelectorAll(".capacity-label").forEach((label) => {
      const input = document.getElementById(label.getAttribute("for"));
      if (input && input.checked) {
        label.classList.add("capacity-active");
      } else {
        label.classList.remove("capacity-active");
      }
    });
  };
  updateActiveClass();

  document.querySelectorAll(".capacity-label").forEach((label) => {
    label.addEventListener("click", () => {
      setTimeout(updateActiveClass, 0);
    });
  });

  /*** Swipers ***/
  new Swiper(".video-swiper", {
    spaceBetween: 20,
    breakpoints: {
      320: { slidesPerView: 1.3 },
      650: { slidesPerView: 1.7 },
      850: { slidesPerView: 2.5 },
    },
  });

  new Swiper(".img-swiper", {
    spaceBetween: 20,
    breakpoints: {
      320: { slidesPerView: 1.4 },
      550: { slidesPerView: 1.9 },
      750: { slidesPerView: 2.3 },
      1024: { slidesPerView: 2.7 },
    },
  });

  new Swiper(".newest-game", {
    spaceBetween: 20,
    breakpoints: {
      320: { slidesPerView: 1.3 },
      500: { slidesPerView: 1.7 },
      750: { slidesPerView: 2.7 },
      1024: { slidesPerView: 3.7 },
    },
  });

  /*** BookMarked ***/
  document.querySelectorAll(".bookmarked").forEach((book) => {
    book.addEventListener("click", () => {
      book.classList.toggle("add-bookmark");
    });
  });

  /*** Waranty Modal ***/
  const modalContent = document.querySelector(".waranty-content");
  const gradientOverlay = document.querySelector(".gradient-overlay");

  if (modalContent && gradientOverlay) {
    modalContent.addEventListener("scroll", () => {
      if (modalContent.scrollTop > 0) {
        gradientOverlay.style.display = "none";
      } else {
        gradientOverlay.style.display = "block";
      }
    });
  }

  /*** Trailer Video ***/
  const trailerEl = document.getElementById("gameplay-trailer");
  if (trailerEl) {
    new Plyr(trailerEl);
  }

  const trailerEl1 = document.getElementById("gameplay1-trailer");
  if (trailerEl1) {
    new Plyr(trailerEl1);
  }
  const trailerEl2 = document.getElementById("gameplay2-trailer");
  if (trailerEl2) {
    new Plyr(trailerEl2);
  }

  /*** FancyBox ***/
  Fancybox.bind('[data-fancybox="gallery"]', {});

  console.log("amir ✅");
});

const capacities = document.querySelectorAll(".capacity");
const flipInner = document.querySelector(".flip-inner");
const back = flipInner.querySelector(".back");

capacities.forEach((cap) => {
  cap.addEventListener("change", () => {
    back.classList.remove("hidden");
    flipInner.classList.add("flipped");

    setTimeout(() => {
      flipInner.classList.remove("flipped");
      back.classList.add("hidden");
    }, 1500);
  });
});
