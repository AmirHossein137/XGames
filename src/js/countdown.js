function startCountdowns() {
  const countdownElements = document.querySelectorAll(".countdown");

  if (countdownElements.length === 0) {
    return;
  }

  countdownElements.forEach((countdownElement, index) => {
    const endDateStr =
      countdownElement.getAttribute("data-end") || "2025-12-31T23:59:59";
    const endDate = new Date(endDateStr);
    const secondsEl = countdownElement.querySelector(".second");
    const minutesEl = countdownElement.querySelector(".minutes");
    const hoursEl = countdownElement.querySelector(".hours");
    const daysEl = countdownElement.querySelector(".days");
    console.log(`Countdown ${index + 1} elements found:`, {
      seconds: secondsEl,
      minutes: minutesEl,
      hours: hoursEl,
      days: daysEl,
    });
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;
      if (distance < 0) {
        return;
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
      if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
      if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
}

startCountdowns();
