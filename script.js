




  document.querySelectorAll('.faq-item h4').forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
      parent.classList.toggle('active');
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



