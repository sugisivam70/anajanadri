document.querySelectorAll(".faq-item h4").forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentElement;
    parent.classList.toggle("active");
  });
});

// /
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

// Hero Slides Carousel
let currentHeroSlide = 0;

function showHeroSlide(index) {
  const slides = document.querySelectorAll(".hero-slide");
  const navBtns = document.querySelectorAll(".hero-nav-btn");

  slides.forEach((slide) => slide.classList.remove("active"));
  navBtns.forEach((btn) => btn.classList.remove("active"));

  slides[index].classList.add("active");
  navBtns[index].classList.add("active");

  currentHeroSlide = index;
}

// Auto-rotate hero slides every 5 seconds
setInterval(() => {
  currentHeroSlide = (currentHeroSlide + 1) % 3;
  showHeroSlide(currentHeroSlide);
}, 5000);
