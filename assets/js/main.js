const body = document.body,
  header = document.querySelector("header"),
  placeholder = document.querySelector("#header-placeholder"),
  tours = document.querySelector("#tours"),
  logo = document.querySelector(".logo img");

// ! Animation for slider
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

// ! Parallax effect for clouds
body.addEventListener("mousemove", (e) => {
  const moveX = e.clientX - window.innerWidth / 2;
  const moveY = e.clientY - window.innerHeight / 2;
  const clouds = document.querySelectorAll(".clouds .cloud");

  const speed = 0.03;
  const x = -(moveX * speed);
  const y = -(moveY * speed);
  clouds.forEach((cloud) => {
    cloud.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
});

// ! Scroll effect for header

let headerHeight = header.offsetHeight,
  isScrolled = false,
  ticking = false;

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

// ! Cards carousel
const swiper = new Swiper(".cards-carousel", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".card-next",
    prevEl: ".card-prev",
  },
});
