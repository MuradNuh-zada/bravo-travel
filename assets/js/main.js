const destinationHeadSlider = [
  {
    id: 1,
    city: "MOSKVA",
    description: "Gəz, gəz və yenə gəz",
    image: "https://bravotravel.az/img/moskva_releated.jpg",
  },
  {
    id: 2,
    city: "İSTANBUL",
    description: "Tarix yazan şəhər",
    image: "https://bravotravel.az/img/istanbul_releated.jpg",
  },
  {
    id: 3,
    city: "DUBAY",
    description: "Dünyanın günəşli bucağı",
    image: "https://bravotravel.az/img/dubai_releated2.jpg",
  },
  {
    id: 4,
    city: "AVROPA",
    description: "İlk qərar verilən destinasiya",
    image: "https://bravotravel.az/img/europe_releated3.jpg",
  },
  {
    id: 5,
    city: "MALDİV",
    description: "Bir yerüzü cənnəti",
    image: "https://bravotravel.az/img/maldiv_releated1.jpg",
  },
];

const swiperWrapper = document.querySelector(
  ".hero-slider-engine .swiper-wrapper",
);

swiperWrapper.innerHTML = destinationHeadSlider
  .map(
    (item) => `
    <div class="swiper-slide hero-item-card" data-title="${item.city}" data-desc="${item.description}">
        <div class="hero-overlay"></div>
        <img src="${item.image}" alt="${item.city}" />
        <div class="hero-info-content">
            <h3>${item.city}</h3>
            <p>${item.description}</p>
        </div>
    </div>
`,
  )
  .join("");

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
  loop: true,

  navigation: {
    nextEl: ".card-next",
    prevEl: ".card-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

let slideTimeout;

const uniqueHeroSwiper = new Swiper(".hero-slider-engine", {
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  allowTouchMove: false,
  slidesPerView: "auto",

  pagination: {
    el: ".hero-dots-container",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className} dot-parent"><span class="dot"></span></div>`;
    },
  },

  breakpoints: {
    100: {
      slidesPerView: "auto",
      spaceBetween: 90,
    },
    576: {
      slidesPerView: "auto",
      spaceBetween: 90,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 250,
    },
    1170: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
    1200: {
      slidesPerView: "auto",
      spaceBetween: 80,
    },
    1300: {
      slidesPerView: "auto",
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: "auto",
      spaceBetween: 50,
    },
  },
  on: {
    init: function () {
      const activeSlide = this.slides[this.activeIndex];

      if (activeSlide) {
        activeSlide.style.height = "370px";
      }
    },

    slideChange: function () {
      clearTimeout(slideTimeout);

      const titleEl = document.querySelector(".hero-title-text");
      const descEl = document.querySelector(".hero-desc-text");

      this.slides.forEach((slide) => {
        slide.style.height = "300px";
        slide.style.transform = "translateY(0px)";
      });

      const realSlide = this.slides[this.activeIndex];

      const title = realSlide?.getAttribute("data-title");
      const desc = realSlide?.getAttribute("data-desc");

      if (titleEl && title) titleEl.innerText = title;
      if (descEl && desc) descEl.innerText = desc;

      slideTimeout = setTimeout(() => {
        const current = this.slides[this.activeIndex];
        const mediaQuery = window.matchMedia("(min-width: 1200px)");

        handleTabletChange(mediaQuery, current);
        mediaQuery.addEventListener("change", handleTabletChange);
      }, 300);
    },

    click: function (swiper, event) {
      const clickedSlide = event.target.closest(".swiper-slide");

      if (!clickedSlide) return;

      const clickedIndex = clickedSlide.getAttribute("data-swiper-slide-index");

      swiper.slideToLoop(clickedIndex);
    },
  },
});

function handleTabletChange(e, current) {
  if (e.matches) {
    return (current.style.height = "370px");
  } else {
    if (current) {
      return (current.style.transform = "translateY(-42px)");
    }
  }
}

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
