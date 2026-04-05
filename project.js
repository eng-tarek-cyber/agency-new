// اختر الـ navbar
const navbar = document.getElementById("navbar");
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.getElementById("nav-menu");

// حدث عند التمرير
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// قائمة الجوال
if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", function () {
    const open = navMenu.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}
