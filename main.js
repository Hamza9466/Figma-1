
let menuIcon = document.querySelector(".menu-icon");
let closeIcon = document.querySelector(".mobile-menu-container .close-icon");
let mobileMenuContainer = document.querySelector(".mobile-menu-container");



menuIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("active");
});
