// ==== STAR ANIMATION ====
const starsContainer = document.querySelector(".stars");

for (let i = 0; i < 150; i++) {
  const star = document.createElement("span");
  star.classList.add("star");
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 3 + "s";
  star.style.animationDuration = 3 + Math.random() * 4 + "s";
  starsContainer.appendChild(star);
}

// ==== ELEMENTS ====
const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const annivText = document.getElementById("annivText");
const surpriseContainer = document.getElementById("surpriseContainer");
const videoSection = document.getElementById("videoSection");
const message = document.getElementById("message");
const video = document.getElementById("annivVideo");

// ==== FLOW ====
startBtn.addEventListener("click", () => {
  intro.classList.add("fade-out");
  setTimeout(() => {
    intro.style.display = "none";
    showAnniv();
  }, 1000);
});

function showAnniv() {
  surpriseContainer.style.display = "flex";
  setTimeout(() => surpriseContainer.classList.add("show"), 100);

  setTimeout(() => {
    surpriseContainer.classList.remove("show");
    setTimeout(() => {
      surpriseContainer.style.display = "none";
      showVideo();
    }, 1000);
  }, 3500);
}

function showVideo() {
  videoSection.style.display = "flex";
  setTimeout(() => videoSection.classList.add("show"), 100);
  video.play();

  video.addEventListener("ended", () => {
    videoSection.classList.remove("show");
    setTimeout(() => {
      videoSection.style.display = "none";
      showMessage();
    }, 1000);
  });
}

function showMessage() {
  message.style.display = "flex";
  setTimeout(() => message.classList.add("show"), 100);
}
