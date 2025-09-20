var swiper = new Swiper(".x-swiper-2", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 2.5,
    },
    450: {
      slidesPerView: 3.5,
    },
    650: {
      slidesPerView: 4.5,
    },
    850: {
      slidesPerView: 5.5,
    },
    1023: {
      slidesPerView: 6.5,
    },
  },
});
var swiper2 = new Swiper(".x-swiper", {
  spaceBetween: 20,
  effect: "fade",
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".slide-one", {
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".slide-two", {
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".newest", {
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    450: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 2.5,
    },
    750: {
      slidesPerView: 3.5,
    },
    900: {
      slidesPerView: 4,
    },
    1080: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".best-selling", {
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    450: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 2.5,
    },
    750: {
      slidesPerView: 3.5,
    },
    900: {
      slidesPerView: 4,
    },
    1080: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".articles-swiper", {
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*** Subscription Swiper ***/

if (window.innerWidth < 1280) {
  var swiper = new Swiper(".subscription", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
    },
  });
}

if (window.innerWidth < 1024) {
  var swiper = new Swiper(".last-news", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1.3,
      },
    },
  });
}

const headerSearch = document.querySelector(".header-search");
const searchInput = headerSearch.querySelector("input");

// فوکوس
searchInput.addEventListener("focus", () => {
  headerSearch.classList.add("active");
});

// تایپ
searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() !== "") {
    headerSearch.classList.add("typing");
  } else {
    headerSearch.classList.remove("typing");
  }
});

// کلیک بیرون
document.addEventListener("click", (e) => {
  if (!headerSearch.contains(e.target)) {
    headerSearch.classList.remove("active", "typing");
    searchInput.value = "";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const allCategories = document.querySelectorAll(".categories a");
  const btns = document.querySelectorAll(".btn-showMore");

  allCategories.forEach((cat, index) => {
    if (index >= 6) cat.classList.add("hidden", "extra");
  });

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const extraItems = document.querySelectorAll(".categories .extra");
      extraItems.forEach((item) => item.classList.toggle("hidden"));

      if (btn.classList.contains("btn-toggleText")) {
        const text = btn.querySelector("span") || btn;
        if (text.textContent.includes("مشاهده بیشتر")) {
          text.textContent = "نمایش کمتر";
        } else {
          text.textContent = "مشاهده بیشتر";
        }
      }
    });
  });
});


const bannersItems = document.querySelectorAll('.banners a');

  bannersItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      bannersItems.forEach(el => {
        if (el !== item) {
          el.querySelector('img').classList.add('grayscale');
        }
      });
    });

    item.addEventListener('mouseleave', () => {
      bannersItems.forEach(el => {
        el.querySelector('img').classList.remove('grayscale');
      });
    });
  });