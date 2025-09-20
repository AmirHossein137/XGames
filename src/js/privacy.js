document.addEventListener("DOMContentLoaded", function () {
  const offcanvas = document.getElementById("offcanvas-privacy");
  const openBtn = document.getElementById("open-btn-privacy");
  const closeBtn = document.getElementById("close-btn-privacy");
  const closedBtn = document.querySelector(".closed");
  const backdrop = document.getElementById("backdrop-privacy");
  const contentLinks = document.querySelectorAll(
    '#offcanvas-privacy a[href^="#"]'
  );

  function openOffcanvas() {
    console.log("Opening offcanvas...");
    offcanvas.classList.remove("hidden");
    backdrop.classList.add("show");
    document.querySelector(".table-of-contents").classList.add("hidden");
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      offcanvas.classList.add("show");
    }, 10);
  }

  function closeOffcanvas() {
    console.log("Closing offcanvas...");
    offcanvas.classList.remove("show");
    backdrop.classList.remove("show");
    document.body.style.overflow = "";

    setTimeout(() => {
      offcanvas.classList.add("hidden");
      document.querySelector(".table-of-contents").classList.remove("hidden");
    }, 300);
  }

  // Event listeners
  if (openBtn) {
    openBtn.addEventListener("click", function (e) {
      console.log("Open button clicked");
      openOffcanvas();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function (e) {
      console.log("Close button clicked");
      closeOffcanvas();
    });
  }

  // دکمه بازگشت
  if (closedBtn) {
    closedBtn.addEventListener("click", function (e) {
      console.log("Closed button clicked");
      closeOffcanvas();
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", function (e) {
      console.log("Backdrop clicked");
      closeOffcanvas();
    });
  }

  contentLinks.forEach((link, index) => {
    link.addEventListener("click", function (e) {
      console.log(`Link ${index} clicked:`, this.getAttribute("href"));
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
      console.log("ESC key pressed");
      closeOffcanvas();
    }
  });
});

/*** Scrolled ***/

document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".sidebar-link");
  const linksArray = Array.from(sidebarLinks);

  sidebarLinks.forEach((link, clickedIndex) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      linksArray.forEach((l) => {
        l.classList.remove("active", "passed");
        if (l.parentElement)
          l.parentElement.classList.remove("actived", "passed");
      });

      link.classList.add("active");
      if (link.parentElement) link.parentElement.classList.add("actived");

      for (let i = 0; i < clickedIndex; i++) {
        if (linksArray[i].parentElement) {
          linksArray[i].parentElement.classList.add("passed");
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




