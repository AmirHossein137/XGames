const wrapper = document.getElementById("text-wrapper");
const btn = document.getElementById("toggle-btn");

let isExpanded = false;
let fullHeight;

window.addEventListener("load", () => {
  fullHeight = wrapper.scrollHeight;
});

btn.addEventListener("click", () => {
  isExpanded = !isExpanded;

  if (isExpanded) {
    wrapper.style.height = fullHeight + "px";
    btn.textContent = "بستن";
  } else {
    wrapper.style.height = "5.5rem";
    btn.textContent = "مشاهده بیشتر";
  }
});
window.addEventListener("resize", () => {
  if (isExpanded) {
    fullHeight = wrapper.scrollHeight;
    wrapper.style.height = fullHeight + "px";
  }
});