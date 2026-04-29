// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");
// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   on: {
//     autoplayTimeLeft(s, time, progress) {
//       progressCircle.style.setProperty("--progress", 1 - progress);
//       progressContent.textContent = `${Math.ceil(time / 1000)}s`;
//     },
//   },
// });

(function animationSlider() {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    allowTouchMove: false,

    on: {
      init: function () {
        startPlane();
      },

      slideChangeTransitionStart: function () {
        startPlane();
      },
    },
  });

  function startPlane() {
    const activeSlide = document.querySelector(".swiper-slide-active .bg-fly");

    if (!activeSlide) return;

    activeSlide.classList.remove("flying");

    requestAnimationFrame(() => {
      activeSlide.classList.add("flying");
    });
  }
})();

// animationSlider();

// const follower = document.querySelector("#follower");
const element = document.querySelector("#carousel");
const rect = element.getBoundingClientRect();
console.log(rect.width / 2);
console.log(rect.width);

document.addEventListener("mousemove", (e) => {
  // console.log(e.clientX, e.clientY);
  // follower.style.left = e.pageX + "px";
  // follower.style.top = e.pageY + "px";
});

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
