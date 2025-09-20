document.addEventListener("DOMContentLoaded", function () {
  // 📌 کپی لینک
  const copyBtn = document.querySelector(".copy-link-btn");

  if (copyBtn) {
    const textSpan = copyBtn.querySelector("span");

    copyBtn.addEventListener("click", () => {
      const url = window.location.href;

      navigator.clipboard
        .writeText(url)
        .then(() => {
          console.log("لینک کپی شد");

          if (textSpan) {
            const originalText = textSpan.textContent;
            textSpan.textContent = "کپی شد";

            setTimeout(() => {
              textSpan.textContent = originalText;
            }, 4000);
          }
        })
        .catch((err) => {
          console.error("خطا در کپی کردن:", err);
        });
    });
  }

  // 📌 اسلایدر (Swiper)
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

  // 📌 مدیریت offcanvas
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

  function closeOffcanvas() {
    offcanvas.classList.remove("show");
    backdrop.classList.remove("show");
    document.body.style.overflow = "";

    setTimeout(() => {
      offcanvas.classList.add("hidden");
      document.querySelector(".table-of-contents").classList.remove("hidden");
    }, 300);
  }

  if (openBtn) openBtn.addEventListener("click", openOffcanvas);
  if (closeBtn) closeBtn.addEventListener("click", closeOffcanvas);
  if (backdrop) backdrop.addEventListener("click", closeOffcanvas);
  if (closedBtn) {
    closedBtn.addEventListener("click", function () {
      console.log("Closed button clicked");
      closeOffcanvas();
    });
  }

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

  // 📌 فعال‌سازی منوی کناری (article-item)
  // const articlesLinks = document.querySelectorAll(".article-item");
  // const linkissArray = Array.from(articlesLinks);

  // articlesLinks.forEach((link, clickedIndex) => {
  //   link.addEventListener("click", function (e) {
  //     e.preventDefault();

  //     linkissArray.forEach((l) => {
  //       l.classList.remove("active", "passed");
  //       if (l.parentElement)
  //         l.parentElement.classList.remove("actived", "passed");
  //     });

  //     link.classList.add("active");
  //     if (link.parentElement) link.parentElement.classList.add("actived");

  //     for (let i = 0; i < clickedIndex; i++) {
  //       if (linkissArray[i].parentElement) {
  //         linkissArray[i].parentElement.classList.add("passed");
  //       }
  //     }

  //     const targetId = link.getAttribute("href").substring(1);
  //     const targetSection = document.getElementById(targetId);
  //     if (targetSection) {
  //       targetSection.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }
  //   });
  // });
  // const articlesLinks = document.querySelectorAll(".article-item");
  // const linkissArray = Array.from(articlesLinks);
  // const sections = linkissArray.map((link) =>
  //   document.querySelector(link.getAttribute("href"))
  // );

  // // 📌 وقتی کاربر کلیک می‌کنه
  // articlesLinks.forEach((link, clickedIndex) => {
  //   link.addEventListener("click", function (e) {
  //     e.preventDefault();

  //     updateActive(clickedIndex);

  //     const targetId = link.getAttribute("href").substring(1);
  //     const targetSection = document.getElementById(targetId);
  //     if (targetSection) {
  //       targetSection.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }
  //   });
  // });

  // // 📌 وقتی کاربر اسکرول می‌کنه
  // window.addEventListener("scroll", () => {
  //   let currentIndex = 0;

  //   sections.forEach((section, i) => {
  //     const rect = section.getBoundingClientRect();
  //     if (rect.top <= window.innerHeight * 0.3) {
  //       currentIndex = i;
  //     }
  //   });

  //   updateActive(currentIndex);
  // });

  // // 📌 تابع آپدیت وضعیت (هم برای کلیک هم اسکرول)
  // function updateActive(index) {
  //   linkissArray.forEach((l) => {
  //     l.classList.remove("active", "passed");
  //     if (l.parentElement)
  //       l.parentElement.classList.remove("actived", "passed");
  //   });

  //   const currentLink = linkissArray[index];
  //   if (currentLink) {
  //     currentLink.classList.add("active");
  //     if (currentLink.parentElement)
  //       currentLink.parentElement.classList.add("actived");
  //   }

  //   for (let i = 0; i < index; i++) {
  //     if (linkissArray[i].parentElement) {
  //       linkissArray[i].parentElement.classList.add("passed");
  //     }
  //   }
  // }

  const articlesLinks = document.querySelectorAll(".article-item");
  const linkissArray = Array.from(articlesLinks);
  const sections = linkissArray.map((link) =>
    document.querySelector(link.getAttribute("href"))
  );

  let passedTimeout = null;

  function resetAndActivate(index) {
    linkissArray.forEach((l) => {
      l.classList.remove("active", "passed");
      if (l.parentElement)
        l.parentElement.classList.remove("actived", "passed");
    });

    const currentLink = linkissArray[index];
    if (currentLink) {
      currentLink.classList.add("active");
      if (currentLink.parentElement)
        currentLink.parentElement.classList.add("actived");
    }
  }

  function addPassed(index) {
    for (let i = 0; i < index; i++) {
      if (linkissArray[i].parentElement) {
        linkissArray[i].parentElement.classList.add("passed");
      }
    }
  }

  articlesLinks.forEach((link, clickedIndex) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      resetAndActivate(clickedIndex);

      if (passedTimeout) clearTimeout(passedTimeout);
      passedTimeout = setTimeout(() => {
        addPassed(clickedIndex);
      }, 500);

      // اسکرول نرم
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

  // --- اسکرول: passed فوری ---
  window.addEventListener("scroll", () => {
    let currentIndex = 0;

    sections.forEach((section, i) => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.3) {
        currentIndex = i;
      }
    });

    // هنگام اسکرول تاخیری نمی‌خوایم
    resetAndActivate(currentIndex);
    addPassed(currentIndex);
  });
});
