const submitBtn = document.querySelector(".checoutBtn");
const checkbox = document.getElementById("policy");
const errorMessage = document.querySelector(".error-message");

const inputsCheckout = document.querySelectorAll("input.required");

submitBtn.addEventListener("click", () => {
  if (!checkbox.checked) {
    showErrorMessage();
  } else {
    hideErrorMessage();

    let hasEmptyInput = false;

    inputsCheckout.forEach((input) => {
      const wrapper = input.parentElement;
      if (input.value.trim() === "") {
        wrapper.classList.add("empty");
        hasEmptyInput = true;
      } else {
        wrapper.classList.remove("empty");
      }
    });

    if (!hasEmptyInput) {
      console.log("فرم معتبر است و آماده ارسال.");
    }
  }
});

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    hideErrorMessage();
  }
});

function showErrorMessage() {
  errorMessage.classList.remove("hidden");
  errorMessage.classList.add("flex");

  setTimeout(() => {
    errorMessage.classList.add("opacity-100");
    errorMessage.classList.remove("opacity-0");
  }, 10);
}

function hideErrorMessage() {
  errorMessage.classList.remove("opacity-100");
  errorMessage.classList.add("opacity-0");

  setTimeout(() => {
    errorMessage.classList.remove("flex");
    errorMessage.classList.add("hidden");
  }, 300);
}
