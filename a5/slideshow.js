let currentIndex = 0;
let timerValue = 4;
let intervalId;

const slides = document.querySelectorAll(".slide");
const timerElement = document.getElementById("timer");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
  resetTimer();
}

function showNext() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function showPrevious() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function resetTimer() {
  clearInterval(intervalId);
  timerValue = 4;
  timerElement.textContent = timerValue;
  intervalId = setInterval(() => {
    timerValue--;
    timerElement.textContent = timerValue;
    if (timerValue === 0) {
      showNext();
    }
  }, 1000);
}

document.getElementById("next-btn").addEventListener("click", showNext);
document.getElementById("prev-btn").addEventListener("click", showPrevious);

// Init
showSlide(currentIndex);
