var swiper = new Swiper(".userInfo-slider", {
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 5,
    },
    700: {
      slidesPerView: 7,
    },
    900: {
      slidesPerView: 9,
    },
    1024: {
      slidesPerView: 10,
    },
  },
});

const profilePic = document.querySelectorAll(".profile-pic");

profilePic.forEach((item) => {
  item.addEventListener("click", () => {
    profilePic.forEach((x) => x.classList.remove("selected"));
    item.classList.add("selected");
  });
});

const copyBtn = document.querySelector(".copy-btn");
const scoreText = document.querySelector(".score-text");

copyBtn.addEventListener("click", () => {
  if (!scoreText) return;

  scoreText.select();
  scoreText.setSelectionRange(0, 99999);

  navigator.clipboard
    .writeText(scoreText.value)
    .then(() => {
      alert("کپی شد: " + scoreText.value);
    })
    .catch((err) => {
      console.error("خطا در کپی کردن:", err);
    });
});
