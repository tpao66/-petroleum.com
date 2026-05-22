// partnership.js

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (
    !navbar.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    navbar.classList.remove("active");
  }
});

const partnerBtn = document.getElementById("partnerBtn");

partnerBtn.addEventListener("click", () => {
  window.location.href = "contact.html";
});
