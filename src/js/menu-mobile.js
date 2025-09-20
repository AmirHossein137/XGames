// document.addEventListener("DOMContentLoaded", () => {
//   const toggleButton = document.querySelector(".menu-toggle");
//   const panel = document.querySelector(".offcanvas-panel");
//   const closeButton = document.querySelector(".close-btn");

//   const togglePanel = () => {
//     panel.classList.toggle("translate-x-full");
//   };
//     toggleButton.addEventListener("click", togglePanel);
//     closeButton.addEventListener("click", togglePanel);
// });

document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".menu-toggle");
  const panels = document.querySelectorAll(".offcanvas-panel");
  const closeButtons = document.querySelectorAll(".close-btn");

  if (panels.length === 0) return;
  const panel = panels[0];

  const toggleClass = "translate-x-full";

  function togglePanel() {
    panel.classList.toggle(toggleClass);
  }

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", togglePanel);
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", togglePanel);
  });
});
