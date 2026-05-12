// ! Burger menu
const menuCloseBtn = document.querySelector(".close button"),
  navMenuOverlay = document.querySelector("nav .overlay"),
  navMenu = document.querySelector(".header-list"),
  burgerMenuBtn = document.querySelector(".burger-menu");

burgerMenuBtn.addEventListener("click", () => {
  navMenuOverlay.style.display = "block";
  navMenu.classList.add("d-block");
  navMenu.classList.add("animate-enter");
  navMenu.classList.remove("animate-left");
});

navMenuOverlay.addEventListener("click", () => {
  navMenu.classList.add("animate-left");
  navMenu.classList.remove("animate-enter");
  navMenuOverlay.style.display = "none";
  setTimeout(() => {
    navMenu.classList.add("d-none");
    navMenu.classList.remove("animate-left");
  }, 300);
});

menuCloseBtn.addEventListener("click", () => {
  navMenu.classList.add("animate-left");
  navMenu.classList.remove("animate-enter");
  navMenuOverlay.style.display = "none";
  setTimeout(() => {
    navMenu.classList.add("d-none");
    navMenu.classList.remove("animate-left");
  }, 300);
});
