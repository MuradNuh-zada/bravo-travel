// ! Burger menu

const menuCloseBtn = document.querySelector(".close button"),
  navMenuOverlay = document.querySelector("nav .overlay"),
  navMenu = document.querySelector(".header-list"),
  burgerMenuBtn = document.querySelector(".burger-menu");

const burgerMenuSearch = document.createElement("input"),
  burgerMenuLiElement = document.createElement("li"),
  burgerMenuSearchIcon = document.createElement("button");

burgerMenuSearch.type = "search";
burgerMenuSearch.placeholder = "Axtarış";
burgerMenuSearch.className = "burger-menu-search";
burgerMenuLiElement.appendChild(burgerMenuSearch);
burgerMenuSearchIcon.className = "burger-search-icon";
burgerMenuLiElement.appendChild(burgerMenuSearchIcon);
burgerMenuLiElement.className = "li-search";
navMenu.appendChild(burgerMenuLiElement);

burgerMenuBtn.addEventListener("click", () => {
  navMenuOverlay.style.display = "block";
  navMenu.classList.add("d-block");
  navMenu.classList.remove("d-none");
  navMenu.classList.add("animate-enter");
  navMenu.classList.remove("animate-left");
});

navMenuOverlay.addEventListener("click", () => {
  navMenu.classList.add("animate-left");
  navMenu.classList.remove("animate-enter");
  navMenuOverlay.style.display = "none";
  setTimeout(() => {
    navMenu.classList.remove("animate-left");
    navMenu.classList.add("d-none");
  }, 200);
});

menuCloseBtn.addEventListener("click", () => {
  navMenu.classList.add("animate-left");
  navMenu.classList.remove("animate-enter");
  navMenuOverlay.style.display = "none";
  setTimeout(() => {
    navMenu.classList.remove("animate-left");
    navMenu.classList.add("d-none");
  }, 200);
});
