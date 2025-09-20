document.querySelector(".copy-link-btn").addEventListener("click", () => {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => {
      console.log("copy linked");
    })
    .catch((err) => {
      console.error("خطا در کپی کردن:", err);
    });
});

var swiper = new Swiper(".suggestion", {
  slidesPerView: 1.5,
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

const offcanvas = document.getElementById("hs-offcanvas");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const backdrop = document.getElementById("backdrop");
const closedBtn = document.querySelector(".closed");
const contentLinks = document.querySelectorAll('#hs-offcanvas a[href^="#"]');

function openOffcanvas() {
  offcanvas.classList.remove("hidden");
  backdrop.classList.add("show");
  document.querySelector(".table-of-contents").classList.add("hidden");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    offcanvas.classList.add("show");
  }, 10);
}

if (closedBtn) {
  closedBtn.addEventListener("click", function (e) {
    console.log("Closed button clicked");
    closeOffcanvas();
  });
}

function closeOffcanvas() {
  offcanvas.classList.remove("show");
  backdrop.classList.remove("show");
  document.body.style.overflow = "";

  setTimeout(() => {
    offcanvas.classList.add("hidden");
    document.querySelector(".table-of-contents").classList.remove("hidden");
  }, 300);
}

openBtn.addEventListener("click", openOffcanvas);

closeBtn.addEventListener("click", closeOffcanvas);
backdrop.addEventListener("click", closeOffcanvas);

contentLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    closeOffcanvas();
    setTimeout(() => {
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 350);
  });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && offcanvas.classList.contains("show")) {
    closeOffcanvas();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const articlesLinks = document.querySelectorAll(".article-item");
  const linkissArray = Array.from(articlesLinks);

  articlesLinks.forEach((link, clickedIndex) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      linkissArray.forEach((l) => {
        l.classList.remove("active", "passed");
        if (l.parentElement)
          l.parentElement.classList.remove("actived", "passed");
      });

      link.classList.add("active");
      if (link.parentElement) link.parentElement.classList.add("actived");

      for (let i = 0; i < clickedIndex; i++) {
        if (linkissArray[i].parentElement) {
          linkissArray[i].parentElement.classList.add("passed");
        }
      }

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
