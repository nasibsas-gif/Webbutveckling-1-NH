const images = [
  "images/hero.jpg",
  "images/training.jpg",
  "images/recovery.jpg"
];

let index = 0;

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider-image");
  if (!slider) return;

  setInterval(() => {
    index = (index + 1) % images.length;
    slider.src = images[index];
  }, 4000);
});