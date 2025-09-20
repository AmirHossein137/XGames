/*** Price Range ***/

// function initPriceRangeSliders() {
//   document.querySelectorAll(".mx-range-wrapper").forEach((wrapper) => {
//     const priceRangeInput = wrapper.querySelectorAll(".mx-price-range-input input");
//     const priceInput = wrapper.querySelectorAll(".mx-price-input input");
//     const priceProgress = wrapper.querySelector(".mx-price-slider .mx-price-progress");

//     if (!priceRangeInput.length || !priceInput.length || !priceProgress) return;

//     const priceStep = 1000000; // قدم ۱ میلیون تومانی

//     function roundToStep(value) {
//       return Math.round(value / priceStep) * priceStep;
//     }

//     function updatePriceProgressBar() {
//       const min = parseInt(priceRangeInput[0].value);
//       const max = parseInt(priceRangeInput[1].value);
//       const rangeMin = parseInt(priceRangeInput[0].min);
//       const rangeMax = parseInt(priceRangeInput[0].max);

//       const sliderWidth = priceRangeInput[0].offsetWidth;
//       const totalRange = rangeMax - rangeMin;

//       const minPx = ((min - rangeMin) / totalRange) * sliderWidth;
//       const maxPx = ((max - rangeMin) / totalRange) * sliderWidth;

//       priceProgress.style.right = minPx + "px";
//       priceProgress.style.width = maxPx - minPx + "px";
//     }

//     function validateAndSetInput(inputType) {
//       let minVal = parseInt(priceInput[0].value);
//       let maxVal = parseInt(priceInput[1].value);
//       const maxLimit = parseInt(priceRangeInput[1].max);
//       const minLimit = parseInt(priceRangeInput[0].min);

//       if (isNaN(minVal)) minVal = parseInt(priceRangeInput[0].value);
//       if (isNaN(maxVal)) maxVal = parseInt(priceRangeInput[1].value);

//       // گرد کردن و محدود کردن فقط در اینجا
//       minVal = roundToStep(minVal);
//       maxVal = roundToStep(maxVal);

//       minVal = Math.max(minLimit, Math.min(minVal, maxLimit));
//       maxVal = Math.max(minLimit, Math.min(maxVal, maxLimit));

//       if (inputType === "min") {
//         if (maxVal <= minVal) {
//           maxVal = Math.min(maxLimit, minVal + priceStep);
//         }
//       } else if (inputType === "max") {
//         if (minVal >= maxVal) {
//           minVal = Math.max(minLimit, maxVal - priceStep);
//         }
//       }

//       priceRangeInput[0].value = minVal;
//       priceRangeInput[1].value = maxVal;
//       priceInput[0].value = minVal;
//       priceInput[1].value = maxVal;

//       updatePriceProgressBar();
//     }

//     // هنگام تایپ در input عددی فقط مقدار اسلایدر را به روز کن ولی گرد نکن
//     priceInput[0].addEventListener("input", () => {
//       let val = priceInput[0].value;
//       if (val === "") return;
//       val = parseInt(val);
//       if (isNaN(val)) return;

//       const maxLimit = parseInt(priceRangeInput[1].max);
//       const minLimit = parseInt(priceRangeInput[0].min);
//       val = Math.max(minLimit, Math.min(val, maxLimit));

//       // اگر مقدار بیشتر از مقدار max اسلایدر بود، محدودش کن
//       if (val >= parseInt(priceRangeInput[1].value)) {
//         priceRangeInput[0].value = parseInt(priceRangeInput[1].value) - priceStep;
//       } else {
//         priceRangeInput[0].value = val;
//       }
//       updatePriceProgressBar();
//     });

//     priceInput[1].addEventListener("input", () => {
//       let val = priceInput[1].value;
//       if (val === "") return;
//       val = parseInt(val);
//       if (isNaN(val)) return;

//       const maxLimit = parseInt(priceRangeInput[1].max);
//       const minLimit = parseInt(priceRangeInput[0].min);
//       val = Math.max(minLimit, Math.min(val, maxLimit));

//       if (val <= parseInt(priceRangeInput[0].value)) {
//         priceRangeInput[1].value = parseInt(priceRangeInput[0].value) + priceStep;
//       } else {
//         priceRangeInput[1].value = val;
//       }
//       updatePriceProgressBar();
//     });

//     // هنگام خروج از input یا تغییر نهایی (blur) مقدار را validate و گرد کن
//     priceInput[0].addEventListener("blur", () => validateAndSetInput("min"));
//     priceInput[1].addEventListener("blur", () => validateAndSetInput("max"));

//     // رویداد تغییر اسلایدر مثل قبلا
//     priceRangeInput.forEach((input) => {
//       input.addEventListener("input", (e) => {
//         let minVal = roundToStep(parseInt(priceRangeInput[0].value));
//         let maxVal = roundToStep(parseInt(priceRangeInput[1].value));

//         const maxLimit = parseInt(priceRangeInput[1].max);
//         const minLimit = parseInt(priceRangeInput[0].min);

//         minVal = Math.max(minLimit, Math.min(minVal, maxLimit));
//         maxVal = Math.max(minLimit, Math.min(maxVal, maxLimit));

//         if (e.target.classList.contains("range-min")) {
//           if (maxVal <= minVal) {
//             maxVal = Math.min(maxLimit, minVal + priceStep);
//           }
//         } else {
//           if (minVal >= maxVal) {
//             minVal = Math.max(minLimit, maxVal - priceStep);
//           }
//         }

//         priceRangeInput[0].value = minVal;
//         priceRangeInput[1].value = maxVal;
//         priceInput[0].value = minVal;
//         priceInput[1].value = maxVal;

//         updatePriceProgressBar();
//       });
//     });

//     // مقدار اولیه (پیشنهاد: مقدار پیش‌فرض به جای خالی)
//     let initialMin = roundToStep(parseInt(priceRangeInput[0].value)) || 0;
//     let initialMax = roundToStep(parseInt(priceRangeInput[1].value)) || parseInt(priceRangeInput[1].max);

//     priceRangeInput[0].value = initialMin;
//     priceRangeInput[1].value = initialMax;
//     priceInput[0].value = initialMin;
//     priceInput[1].value = initialMax;

//     updatePriceProgressBar();
//   });
// }

function initPriceRangeSliders() {
  document.querySelectorAll(".mx-range-wrapper").forEach((wrapper) => {
    const priceRangeInput = wrapper.querySelectorAll(
      ".mx-price-range-input input"
    );
    const priceInput = wrapper.querySelectorAll(".mx-price-input input");
    const priceProgress = wrapper.querySelector(
      ".mx-price-slider .mx-price-progress"
    );

    if (!priceRangeInput.length || !priceInput.length || !priceProgress) return;

    const priceStep = 1000000;

    priceInput.forEach((input) => {
      if (
        !input.nextElementSibling ||
        !input.nextElementSibling.classList.contains("formatted-value")
      ) {
        const span = document.createElement("span");
        span.className =
          "formatted-value text-[#677696] text-sm pr-2 select-none";
        input.parentNode.insertBefore(span, input.nextSibling);
      }
    });

    function formatNumberWithCommas(x) {
      if (isNaN(x) || x === null) return "";
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function updateFormattedValues() {
      priceInput.forEach((input) => {
        const val = input.value;
        const formatted = formatNumberWithCommas(val);
        const span = input.parentNode.querySelector(".formatted-value");
        if (span) {
          span.textContent = formatted;
        }
      });
    }

    function updatePriceProgressBar() {
      const min = parseInt(priceRangeInput[0].value);
      const max = parseInt(priceRangeInput[1].value);
      const rangeMin = parseInt(priceRangeInput[0].min);
      const rangeMax = parseInt(priceRangeInput[0].max);

      const sliderWidth = priceRangeInput[0].offsetWidth;
      const totalRange = rangeMax - rangeMin;

      const minPx = ((min - rangeMin) / totalRange) * sliderWidth;
      const maxPx = ((max - rangeMin) / totalRange) * sliderWidth;

      priceProgress.style.right = minPx + "px";
      priceProgress.style.width = maxPx - minPx + "px";
    }

    function validateAndSetInput(inputType) {
      let minVal = parseInt(priceInput[0].value);
      let maxVal = parseInt(priceInput[1].value);
      const maxLimit = parseInt(priceRangeInput[1].max);
      const minLimit = parseInt(priceRangeInput[0].min);

      if (isNaN(minVal)) minVal = parseInt(priceRangeInput[0].value);
      if (isNaN(maxVal)) maxVal = parseInt(priceRangeInput[1].value);

      minVal = Math.round(minVal / priceStep) * priceStep;
      maxVal = Math.round(maxVal / priceStep) * priceStep;

      minVal = Math.max(minLimit, Math.min(minVal, maxLimit));
      maxVal = Math.max(minLimit, Math.min(maxVal, maxLimit));

      if (inputType === "min") {
        if (maxVal <= minVal) {
          maxVal = Math.min(maxLimit, minVal + priceStep);
        }
      } else if (inputType === "max") {
        if (minVal >= maxVal) {
          minVal = Math.max(minLimit, maxVal - priceStep);
        }
      }

      priceRangeInput[0].value = minVal;
      priceRangeInput[1].value = maxVal;
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;

      updateFormattedValues();
      updatePriceProgressBar();
    }

    priceInput[0].addEventListener("input", () => {
      let val = parseInt(priceInput[0].value);
      if (isNaN(val)) return;

      const maxLimit = parseInt(priceRangeInput[1].max);
      const minLimit = parseInt(priceRangeInput[0].min);

      val = Math.max(minLimit, Math.min(val, maxLimit));

      if (val >= parseInt(priceRangeInput[1].value)) {
        priceRangeInput[0].value =
          parseInt(priceRangeInput[1].value) - priceStep;
      } else {
        priceRangeInput[0].value = val;
      }

      updateFormattedValues();
      updatePriceProgressBar();
    });

    priceInput[1].addEventListener("input", () => {
      let val = parseInt(priceInput[1].value);
      if (isNaN(val)) return;

      const maxLimit = parseInt(priceRangeInput[1].max);
      const minLimit = parseInt(priceRangeInput[0].min);

      val = Math.max(minLimit, Math.min(val, maxLimit));

      if (val <= parseInt(priceRangeInput[0].value)) {
        priceRangeInput[1].value =
          parseInt(priceRangeInput[0].value) + priceStep;
      } else {
        priceRangeInput[1].value = val;
      }

      updateFormattedValues();
      updatePriceProgressBar();
    });

    priceInput[0].addEventListener("blur", () => validateAndSetInput("min"));
    priceInput[1].addEventListener("blur", () => validateAndSetInput("max"));

    priceRangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minVal =
          Math.round(parseInt(priceRangeInput[0].value) / priceStep) *
          priceStep;
        let maxVal =
          Math.round(parseInt(priceRangeInput[1].value) / priceStep) *
          priceStep;

        const maxLimit = parseInt(priceRangeInput[1].max);
        const minLimit = parseInt(priceRangeInput[0].min);

        minVal = Math.max(minLimit, Math.min(minVal, maxLimit));
        maxVal = Math.max(minLimit, Math.min(maxVal, maxLimit));

        if (e.target.classList.contains("range-min")) {
          if (maxVal <= minVal) {
            maxVal = Math.min(maxLimit, minVal + priceStep);
          }
        } else {
          if (minVal >= maxVal) {
            minVal = Math.max(minLimit, maxVal - priceStep);
          }
        }

        priceRangeInput[0].value = minVal;
        priceRangeInput[1].value = maxVal;
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;

        updateFormattedValues();
        updatePriceProgressBar();
      });
    });

    let initialMin =
      Math.round(parseInt(priceRangeInput[0].value) / priceStep) * priceStep ||
      0;
    let initialMax =
      Math.round(parseInt(priceRangeInput[1].value) / priceStep) * priceStep ||
      parseInt(priceRangeInput[1].max);

    priceRangeInput[0].value = initialMin;
    priceRangeInput[1].value = initialMax;
    priceInput[0].value = initialMin;
    priceInput[1].value = initialMax;

    updateFormattedValues();
    updatePriceProgressBar();
  });
}

/*** Year Range ***/

function initYearRangeSliders() {
  document.querySelectorAll(".mx-range-wrapper").forEach((wrapper) => {
    const yearRangeInput = wrapper.querySelectorAll(
      ".mx-year-range-input input"
    );
    const yearInput = wrapper.querySelectorAll(".mx-year-input input");
    const yearProgress = wrapper.querySelector(
      ".mx-price-slider .mx-year-progress"
    );

    if (!yearRangeInput.length || !yearInput.length || !yearProgress) return;

    const yearGap = 1;

    function updateYearProgressBar() {
      const min = parseInt(yearRangeInput[0].value);
      const max = parseInt(yearRangeInput[1].value);
      const rangeMin = parseInt(yearRangeInput[0].min);
      const rangeMax = parseInt(yearRangeInput[0].max);

      const sliderWidth = yearRangeInput[0].offsetWidth;
      const totalRange = rangeMax - rangeMin;

      const minPx = ((min - rangeMin) / totalRange) * sliderWidth;
      const maxPx = ((max - rangeMin) / totalRange) * sliderWidth;

      yearProgress.style.right = minPx + "px";
      yearProgress.style.width = maxPx - minPx + "px";
    }

    function validateAndSetYearInput(inputType) {
      let minVal = parseInt(yearInput[0].value);
      let maxVal = parseInt(yearInput[1].value);
      const maxLimit = parseInt(yearRangeInput[1].max);

      if (isNaN(minVal)) minVal = parseInt(yearRangeInput[0].value);
      if (isNaN(maxVal)) maxVal = parseInt(yearRangeInput[1].value);

      if (maxVal - minVal < yearGap) {
        // فاصله کافی نیست، آپدیت نکن
        return;
      }

      if (inputType === "min") {
        yearRangeInput[0].value = minVal;
      } else if (inputType === "max") {
        yearRangeInput[1].value = maxVal;
      }

      updateYearProgressBar();
    }

    yearInput[0].addEventListener("input", () => {
      validateAndSetYearInput("min");
    });

    yearInput[1].addEventListener("input", () => {
      validateAndSetYearInput("max");
    });

    yearRangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minVal = parseInt(yearRangeInput[0].value);
        let maxVal = parseInt(yearRangeInput[1].value);

        if (maxVal - minVal < yearGap) {
          if (e.target.classList.contains("range-min-year")) {
            yearRangeInput[0].value = maxVal - yearGap;
          } else {
            yearRangeInput[1].value = minVal + yearGap;
          }
        } else {
          yearInput[0].value = minVal;
          yearInput[1].value = maxVal;
          updateYearProgressBar();
        }
      });
    });

    updateYearProgressBar();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initPriceRangeSliders();
  initYearRangeSliders();

  const offcanvas = document.getElementById("offcanvasFilters");
  if (offcanvas) {
    offcanvas.addEventListener("shown.bs.offcanvas", function () {
      initPriceRangeSliders();
      initYearRangeSliders();
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(
    'button[aria-controls="hs-offcanvas-bottom1"]'
  );
  const offcanvas = document.getElementById("hs-offcanvas-bottom1");
  const sortButtons = offcanvas.querySelectorAll(".grid button");
  const selectedTextSpan = document.querySelector(".sort-value");

  // فعال کردن دکمه انتخاب‌شده
  function setActiveButton(text) {
    sortButtons.forEach((btn) => {
      if (btn.textContent.trim() === text) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  const saved = localStorage.getItem("selectedSort");
  if (saved) {
    selectedTextSpan.textContent = saved;
    setActiveButton(saved);
  }

  sortButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.textContent.trim();

      selectedTextSpan.textContent = selected;

      setActiveButton(selected);

      localStorage.setItem("selectedSort", selected);

      const hsOverlayInstance = HsOverlay.getInstance(offcanvas);
      if (hsOverlayInstance) {
        hsOverlayInstance.hide();
      }
    });
  });
});
