document.addEventListener("DOMContentLoaded", () => {
  /*** Modal Handling ***/
  // const openButtons = document.querySelectorAll("[data-open-modal]");
  // const modals = document.querySelectorAll(".modal");

  // function closeModal(modal) {
  //   const content = modal.querySelector(".modal-content");
  //   content.classList.remove("scale-100", "opacity-100");
  //   content.classList.add("scale-95", "opacity-0");

  //   setTimeout(() => {
  //     modal.classList.add("hidden");
  //     const openButton = document.querySelector(
  //       `[data-open-modal="${modal.id}"]`
  //     );
  //     if (openButton) openButton.classList.remove("active");
  //   }, 300);
  // }

  // openButtons.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     const targetId = button.getAttribute("data-open-modal");
  //     const modal = document.getElementById(targetId);
  //     if (!modal) return;

  //     const content = modal.querySelector(".modal-content");
  //     modal.classList.remove("hidden");

  //     requestAnimationFrame(() => {
  //       content.classList.remove("scale-95", "opacity-0");
  //       content.classList.add("scale-100", "opacity-100");
  //     });

  //     button.classList.add("active");
  //   });
  // });

  // document.querySelectorAll(".close-modal").forEach((button) => {
  //   button.addEventListener("click", () => {
  //     const modal = button.closest(".modal");
  //     if (modal) closeModal(modal);
  //   });
  // });

  // modals.forEach((modal) => {
  //   modal.addEventListener("click", (e) => {
  //     if (e.target === modal) closeModal(modal);
  //   });
  // });

  const openButtons = document.querySelectorAll("[data-open-modal]");
  const modals = document.querySelectorAll(".modal");

  function closeModal(modal) {
    const content = modal.querySelector(".modal-content");
    content.classList.remove("scale-100", "opacity-100");
    content.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
      modal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden"); // ✅ اسکرول برگرده
      const openButton = document.querySelector(
        `[data-open-modal="${modal.id}"]`
      );
      if (openButton) openButton.classList.remove("active");
    }, 300);
  }

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-open-modal");
      const modal = document.getElementById(targetId);
      if (!modal) return;

      const content = modal.querySelector(".modal-content");
      modal.classList.remove("hidden");

      requestAnimationFrame(() => {
        content.classList.remove("scale-95", "opacity-0");
        content.classList.add("scale-100", "opacity-100");
      });

      document.body.classList.add("overflow-hidden");
      button.classList.add("active");
    });
  });

  document.querySelectorAll(".close-modal").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      if (modal) closeModal(modal);
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  /*** Expandable Text ***/
  const expandableBlocks = document.querySelectorAll(".expandable-text");
  expandableBlocks.forEach((block) => {
    const wrapper = block.querySelector(".text-wrapper");
    const btn = block.querySelector(".toggle-btn");
    let isExpanded = false;

    function updateHeight() {
      const fullHeight = wrapper.scrollHeight;
      if (isExpanded) wrapper.style.height = fullHeight + "px";
    }

    window.addEventListener("load", updateHeight);
    window.addEventListener("resize", updateHeight);

    btn.addEventListener("click", () => {
      isExpanded = !isExpanded;
      if (isExpanded) {
        wrapper.style.height = wrapper.scrollHeight + "px";
        wrapper.classList.add("active");
        btn.textContent = "بستن";
      } else {
        wrapper.style.height = "150px";
        wrapper.classList.remove("active");
        btn.textContent = "مشاهده بیشتر";
      }
    });
  });

  /*** Mega Menu ***/
  // const headerWrap = document.querySelector(".header-wrap");
  // const menuItems = document.querySelectorAll(".item");
  // const mItems = document.querySelectorAll(".menu-item");
  // const contentBoxes = document.querySelectorAll(".menu-content");
  // let menuTimeout;

  // menuItems.forEach((item) => {
  //   item.addEventListener("mouseenter", (e) => {
  //     clearTimeout(menuTimeout);
  //     document.body.classList.add("menu-opened");

  //     const target = item.getAttribute("data-target");

  //     if (target) {
  //       mItems.forEach((btn) => btn.classList.remove("active"));

  //       const targetMenuItem = document.querySelector(`[data-id="${target}"]`);
  //       if (targetMenuItem) {
  //         targetMenuItem.classList.add("active");
  //       }
  //       contentBoxes.forEach((box) => {
  //         box.classList.toggle(
  //           "hidden",
  //           box.getAttribute("data-content") !== target
  //         );
  //       });
  //     } else {
  //       mItems.forEach((btn) => btn.classList.remove("active"));
  //       const platformMenuItem = document.querySelector('[data-id="platform"]');
  //       if (platformMenuItem) {
  //         platformMenuItem.classList.add("active");
  //       }

  //       contentBoxes.forEach((box) => {
  //         box.classList.toggle(
  //           "hidden",
  //           box.getAttribute("data-content") !== "platform"
  //         );
  //       });
  //     }
  //   });
  // });

  // function closeMenuWithDelay() {
  //   menuTimeout = setTimeout(() => {
  //     document.body.classList.remove("menu-opened");
  //   }, 300);
  // }

  // headerWrap.addEventListener("mouseleave", closeMenuWithDelay);

  // const megaMenuContent = document.querySelector(".mega-menu-content");
  // if (megaMenuContent) {
  //   megaMenuContent.addEventListener("mouseenter", () =>
  //     clearTimeout(menuTimeout)
  //   );
  // }
  // mItems.forEach((item) => {
  //   item.addEventListener("mouseenter", () => {
  //     const targetId = item.getAttribute("data-id");
  //     mItems.forEach((btn) => btn.classList.remove("active"));
  //     item.classList.add("active");
  //     contentBoxes.forEach((box) => {
  //       box.classList.toggle(
  //         "hidden",
  //         box.getAttribute("data-content") !== targetId
  //       );
  //     });
  //   });
  // });

  const headerWrap = document.querySelector(".header-wrap");
  const menuItems = document.querySelectorAll(".item");
  const mItems = document.querySelectorAll(".menu-item");
  const contentBoxes = document.querySelectorAll(".menu-content");
  let menuTimeout;

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      clearTimeout(menuTimeout);
      document.body.classList.add("menu-opened");

      const target = item.getAttribute("data-target");

      if (target) {
        mItems.forEach((btn) => btn.classList.remove("active"));
        const targetMenuItem = document.querySelector(`[data-id="${target}"]`);
        if (targetMenuItem) {
          targetMenuItem.classList.add("active");
        }
        contentBoxes.forEach((box) => {
          box.classList.toggle(
            "hidden",
            box.getAttribute("data-content") !== target
          );
        });
      } else {
        mItems.forEach((btn) => btn.classList.remove("active"));
        const platformMenuItem = document.querySelector('[data-id="platform"]');
        if (platformMenuItem) {
          platformMenuItem.classList.add("active");
        }
        contentBoxes.forEach((box) => {
          box.classList.toggle(
            "hidden",
            box.getAttribute("data-content") !== "platform"
          );
        });
      }
    });
  });

  function closeMenuWithDelay() {
    menuTimeout = setTimeout(() => {
      document.body.classList.remove("menu-opened");
      mItems.forEach((btn) => btn.classList.remove("active"));
      contentBoxes.forEach((box) => box.classList.add("hidden"));
    }, 300);
  }

  headerWrap.addEventListener("mouseleave", closeMenuWithDelay);

  const megaMenuContent = document.querySelector(".mega-menu-content");
  if (megaMenuContent) {
    megaMenuContent.addEventListener("mouseenter", () =>
      clearTimeout(menuTimeout)
    );
  }

  mItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const targetId = item.getAttribute("data-id");
      mItems.forEach((btn) => btn.classList.remove("active"));
      item.classList.add("active");
      contentBoxes.forEach((box) => {
        box.classList.toggle(
          "hidden",
          box.getAttribute("data-content") !== targetId
        );
      });
    });
  });

  headerWrap.addEventListener("mouseover", (e) => {
    if (
      !e.target.closest(".item") &&
      !e.target.closest(".menu-item") &&
      !e.target.closest(".mega-menu-content")
    ) {
      document.body.classList.remove("menu-opened");
      mItems.forEach((btn) => btn.classList.remove("active"));
      contentBoxes.forEach((box) => box.classList.add("hidden"));
    }
  });

  /*** Login Validation ***/
  const input = document.getElementById("phoneInput");
  const errorMsg = document.getElementById("errorMsg");

  if (input && errorMsg) {
    input.addEventListener("input", function () {
      let digitsOnly = this.value.replace(/\D/g, "");
      if (digitsOnly.length > 11) digitsOnly = digitsOnly.slice(0, 11);
      this.value = digitsOnly;

      const isFullPhone = digitsOnly.length === 11;
      const startsWith09 = digitsOnly.startsWith("09");
      const isValid = /^09\d{9}$/.test(digitsOnly);

      if (!isFullPhone && startsWith09) {
        errorMsg.classList.add("hidden");
        return;
      }

      if (!isValid) errorMsg.classList.remove("hidden");
      else errorMsg.classList.add("hidden");
    });
  }

  /*** OTP Inputs ***/
  const inputs = document.querySelectorAll(".otp-inp");
  if (inputs.length > 0) inputs[0].focus();

  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D/g, "");
      if (e.target.value && index < inputs.length - 1)
        inputs[index + 1].focus();
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && e.target.value === "" && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });

  /*** Countdown & Resend OTP ***/
  const countdownEl = document.getElementById("countdown");
  const resendBtn = document.getElementById("resendBtn");

  let timer;
  let timeLeft = 180;

  function startCountdown() {
    timeLeft = 30;
    resendBtn.classList.add("hidden");
    countdownEl.classList.remove("text-gray-500");
    countdownEl.classList.add("text-red-500");

    timer = setInterval(() => {
      const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
      const seconds = String(timeLeft % 60).padStart(2, "0");
      countdownEl.textContent = `${minutes}:${seconds}`;

      if (timeLeft <= 0) {
        clearInterval(timer);
        countdownEl.classList.remove("text-red-500");
        countdownEl.classList.add("text-gray-500");
        countdownEl.textContent = "";
        resendBtn.classList.remove("hidden");
      }
      timeLeft--;
    }, 1000);
  }

  if (resendBtn && countdownEl) {
    startCountdown();
    resendBtn.addEventListener("click", startCountdown);
  }

  /*** Offcanvas Panel ***/
  const toggleButtons = document.querySelectorAll(".menu-toggle");
  const panels = document.querySelectorAll(".offcanvas-panel");
  const closeButtons = document.querySelectorAll(".close-btn");

  if (panels.length > 0) {
    const panel = panels[0];
    const toggleClass = "translate-x-full";

    function togglePanel() {
      panel.classList.toggle(toggleClass);
    }

    toggleButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelector(".menu-panel").classList.add("translate-x-full");
        document.querySelector(".menu-backdrop").classList.add("hidden");
        setTimeout(() => {
          togglePanel();
        }, 200);
      });
    });

    closeButtons.forEach((btn) => {
      btn.addEventListener("click", togglePanel);
    });
  }

  /*** Basket Dropdown ***/
  const basketBtn = document.querySelector(".basket");
  if (basketBtn) {
    const basketDrop = basketBtn.querySelector(".basket-drop");
    basketBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      basketDrop.classList.toggle("active");
    });
    document.addEventListener("click", (e) => {
      if (!basketBtn.contains(e.target)) basketDrop.classList.remove("active");
    });
  }

  /*** Search Modal Input Focus ***/
  const modalWrapper = document.querySelector(".search-modal-wrapper");
  if (modalWrapper) {
    const input = modalWrapper.querySelector(".search-mobile input");
    if (input) {
      input.addEventListener("focus", () =>
        modalWrapper.classList.add("focused")
      );
      input.addEventListener("blur", () =>
        modalWrapper.classList.remove("focused")
      );
    }
  }

  /*** Search ShowItem ***/

  const searchWrappers = document.querySelectorAll(".search-modal-wrapper");
  searchWrappers.forEach((wrapper) => {
    const inputSearchValue = wrapper.querySelector(".search-mobile input");
    const searchGame = wrapper.querySelector(".search-game");
    const searchGameFounded = wrapper.querySelector(".search-game-founded");

    if (inputSearchValue && searchGame && searchGameFounded) {
      inputSearchValue.addEventListener("input", () => {
        if (inputSearchValue.value.trim() !== "") {
          searchGame.classList.add("hidden");
          searchGame.classList.remove("flex");

          searchGameFounded.classList.remove("hidden");
          searchGameFounded.classList.add("flex");
        } else {
          searchGame.classList.remove("hidden");
          searchGame.classList.add("flex");

          searchGameFounded.classList.add("hidden");
          searchGameFounded.classList.remove("flex");
        }
      });
    }
  });

  /*** Humber Content ***/
  document.querySelectorAll(".humber-menu").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelector(".menu-panel")
        .classList.remove("translate-x-full");
      document.querySelector(".menu-backdrop").classList.remove("hidden");
    });
  });

  document
    .querySelectorAll(".menu-close, .menu-backdrop")
    .forEach((element) => {
      element.addEventListener("click", () => {
        document.querySelector(".menu-panel").classList.add("translate-x-full");
        document.querySelector(".menu-backdrop").classList.add("hidden");
      });
    });
});

// const sortLinks = document.querySelectorAll(".sorts");

// sortLinks.forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     sortLinks.forEach((item) => item.classList.remove("active"));
//     this.classList.add("active");
//   });
// });

const sortLinks = document.querySelectorAll(".sorts");

if (sortLinks.length > 0) {
  sortLinks[0].classList.add("active");
}
sortLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    sortLinks.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

const zhanrsItems = document.querySelectorAll(".zhanrs a");

zhanrsItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    zhanrsItems.forEach((el) => {
      if (el !== item) {
        el.querySelector("img").classList.add("grayscale");
      }
    });
  });

  item.addEventListener("mouseleave", () => {
    zhanrsItems.forEach((el) => {
      el.querySelector("img").classList.remove("grayscale");
    });
  });
});

const subscriptionItems = document.querySelectorAll(".subscription-item a");

subscriptionItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    subscriptionItems.forEach((el) => {
      if (el !== item) {
        el.classList.add("grayscale");
      }
    });
  });

  item.addEventListener("mouseleave", () => {
    subscriptionItems.forEach((el) => {
      el.classList.remove("grayscale");
    });
  });
});
