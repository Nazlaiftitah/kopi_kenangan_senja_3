// toggle class active
const navLinks = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// ketika hamburger menu diklik
hamburger.onclick = () => {
  navLinks.classList.toggle("active");
};

// klik di luar sidebar untuk menutup navbar
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});
