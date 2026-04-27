// window.onscroll = function () {
//   const tours = document.querySelector("#tours");
//   const header = document.querySelector("header");
//   const logo = document.querySelector(".logo img");
//   const rectTours = tours.getBoundingClientRect();
//   if (rectTours.top <= 0) {
//     header.classList.add("scrolled");
//     logo.src = "https://bravotravel.az/img/logo-new-white.png";
//     if (document.querySelector(".cloud") === null) {
//       const cloudImg = document.createElement("img");
//       cloudImg.src = "https://bravotravel.az/img/cloud4.png";
//       cloudImg.classList.add("cloud");
//       header.appendChild(cloudImg);
//     }
//   } else {
//     header.classList.remove("scrolled");
//     const cloudImg = document.querySelector(".cloud");
//     if (cloudImg) {
//       header.removeChild(cloudImg);
//     }
//     logo.src = "https://bravotravel.az/img/logo-new.png";
//   }
// };

const header = document.querySelector("header");
const placeholder = document.querySelector("#header-placeholder");
const tours = document.querySelector("#tours");
const logo = document.querySelector(".logo img");

let headerHeight = header.offsetHeight;
let isScrolled = false;
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
});

function handleScroll() {
  const rectTours = tours.getBoundingClientRect();
  const shouldBeScrolled = rectTours.top <= 0;
  if (shouldBeScrolled === isScrolled) return;
  isScrolled = shouldBeScrolled;
  if (isScrolled) {
    header.classList.add("scrolled");
    placeholder.style.height = headerHeight + "px";
    logo.src = "https://bravotravel.az/img/logo-new-white.png";
    if (!header.querySelector(".cloud")) {
      const cloudImg = document.createElement("img");
      cloudImg.src = "https://bravotravel.az/img/cloud4.png";
      cloudImg.classList.add("cloud");
      header.appendChild(cloudImg);
    }
  } else {
    header.classList.remove("scrolled");
    const cloudImg = header.querySelector(".cloud");
    if (cloudImg) {
      header.removeChild(cloudImg);
    }
    logo.src = "https://bravotravel.az/img/logo-new.png";
    placeholder.style.height = "0px";
  }
}
