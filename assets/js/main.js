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
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".card-next",
    prevEl: ".card-prev",
  },
});

const uniqueHeroSwiper = new Swiper(".hero-slider-engine", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
  slidesPerView: "auto",
  spaceBetween: 145,
  pagination: {
    el: ".hero-dots-container",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className} dot-parent"><span class="dot"></span></div>`;
    },
  },
  on: {
    slideChange: function () {
      const activeSlide = this.slides[this.activeIndex];
      const title = activeSlide.getAttribute("data-title");
      const desc = activeSlide.getAttribute("data-desc");

      const titleEl = document.querySelector(".hero-title-text");
      const descEl = document.querySelector(".hero-desc-text");

      if (titleEl && title) titleEl.innerText = title;
      if (descEl && desc) descEl.innerText = desc;
    },
  },
});
