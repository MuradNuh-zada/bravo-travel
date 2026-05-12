const fields = document.querySelectorAll(".input-box, .textarea-box");

fields.forEach((field) => {
  const input = field.querySelector("input, textarea");
  const original = input.placeholder;
  if (input.value.trim() !== "") {
    field.classList.add("active");
  }

  input.addEventListener("focus", () => {
    field.classList.add("active");
    input.placeholder = "";
  });

  input.addEventListener("blur", () => {
    if (input.value.trim() === "") {
      field.classList.remove("active");
      input.placeholder = original;
    }
  });

  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      field.classList.add("active");
    } else {
      field.classList.remove("active");
    }
  });
});

ymaps.ready(init);

function init() {
  const mapContainer = document.getElementById("map");
  if (!mapContainer) return;

  var map = new ymaps.Map("map", {
    center: [40.390883, 49.84111],
    zoom: 15,
    controls: ["zoomControl"],
  });
  map.behaviors.disable("scrollZoom");
  const coords = [40.390883, 49.84111];

  var placemark = new ymaps.Placemark(
    coords,
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "https://bravotravel.az/img/mark.png?ver=1.1",
      iconImageSize: [80, 65],
      iconImageOffset: [-40, -65],
    },
  );

  map.geoObjects.add(placemark);
}

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
