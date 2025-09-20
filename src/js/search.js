document.addEventListener("DOMContentLoaded", () => {
  const modalWrapper = document.querySelector(".search-modal-wrapper");
  
  console.log(modalWrapper);

  if (!modalWrapper) return;

  const input = modalWrapper.querySelector(".search-mobile input");
  if (!input) return;

  input.addEventListener("focus", () => {
    modalWrapper.classList.add("focused");
  });

  input.addEventListener("blur", () => {
    modalWrapper.classList.remove("focused");
  });
});
