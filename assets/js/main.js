// ! Set head slider tours cards
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

// ! Set hot tours cards
const hotToursElforSlider = [
  {
    id: 0,
    title: "İSTANBULDA BLACK FRİDAY",
    date: "23.11.2022 - 27.11.2022",
    price: "559$ - 717$",
    image:
      "https://bravotravel.az/uploads/posts/2022-09/thumbs/1664460726_photo_5303063749382488715_y.jpg",
    link: "https://bravotravel.az/new-tours/68-stanbulda-black-frday.html",
  },
  {
    id: 1,
    title: "BANGKOK-PATTAYA",
    date: "06.11.2022 - 13.11.2022",
    price: "2455$ - 3696$",
    image:
      "https://bravotravel.az/uploads/posts/2022-09/medium/1663771518_3.png",
    link: "https://bravotravel.az/new-tours/67-bangkok-pattaya.html",
  },
  {
    id: 2,
    title: "LAPLANDİYA YENİ İL",
    date: "27.12.2022 - 03.01.2023",
    price: "4570$ - 10090$",
    image:
      "https://bravotravel.az/uploads/posts/2022-09/medium/1662988718_photo_5251532023095476369_y.jpg",
    link: "https://bravotravel.az/new-tours/66-laplandya-yen-l.html",
  },
  {
    id: 3,
    title: "KAPADOKYA",
    date: "25.09 - 30.09",
    price: "1640$ - 2210$",
    image:
      "https://bravotravel.az/uploads/posts/2022-09/thumbs/1662541308_55.png",
    link: "https://bravotravel.az/new-tours/64-kapadokya.html",
  },
  {
    id: 4,
    title: "Dubay",
    date: "08.11.2022 - 12.11.2022",
    price: "2725 AZN - 3200 AZN",
    image:
      "https://bravotravel.az/uploads/posts/2022-08/medium/1661871303_8787.jpg",
    link: "https://bravotravel.az/new-tours/63-dubay.html",
  },
  {
    id: 5,
    title: "Cenevrə",
    date: "15.10.2022 - 21.10.2022",
    price: "2460 USD - 4153 USD",
    image:
      "https://bravotravel.az/uploads/posts/2022-08/medium/1661869774_202.jpg",
    link: "https://bravotravel.az/new-tours/62-cenevre.html",
  },
  {
    id: 6,
    title: "Disneyland Paris",
    date: "20.10.2022 - 26.10.2022",
    price: "4710 USD - 6480 USD",
    image:
      "https://bravotravel.az/uploads/posts/2022-08/medium/1661869296_123123.jpg",
    link: "https://bravotravel.az/new-tours/61-disneyland-paris.html",
  },
  {
    id: 7,
    title: "Tbilisi",
    date: "18.09.2022 - 23.09.2022",
    price: "1729 AZN - 2426 AZN",
    image:
      "https://bravotravel.az/uploads/posts/2022-08/medium/1661868740_2022-08-30-18.08.16.jpg",
    link: "https://bravotravel.az/new-tours/60-tbilisi.html",
  },
  {
    id: 8,
    title: "AMSTERDAM",
    date: "10.11.2022 - 15.11.2022",
    price: "2707 AZN - 5174 AZN",
    image:
      "https://bravotravel.az/uploads/posts/2022-08/medium/1661433370_photo_2022-08-25_16-15-30.jpg",
    link: "https://bravotravel.az/new-tours/59-amsterdam.html",
  },
  {
    id: 9,
    title: "Marmaris",
    date: "02.09.2022 - 09.09.2022",
    price: "1874 USD - 2040 USD",
    image:
      "https://bravotravel.az/uploads/posts/2022-08/medium/1661432491_img_9995.jpg",
    link: "https://bravotravel.az/new-tours/58-marmaris.html",
  },
];
const hotTourCardsParent = document.querySelector(".tours-carousel .cards");
hotTourCardsParent.innerHTML = hotToursElforSlider
  .map(
    (element) => `<div href="${element.link}" class="card swiper-slide">
      <img
          src="${element.image}" alt="${element.city}"
      />
        <div class="card-info">
          <h3>${element.title}</h3>
          <h4>${element.date}</h4>
          <div class="card-footer">
            <p>${element.price}</p>
            <span>Ətraflı</span>
          </div>
        </div>
  </div>`,
  )
  .join("");

// ! Set new tours cards
const newToursElements = [
  {
    id: 0,
    title: "BALİ TURU",
    date: "10.04.2023 - 20.04.2023",
    price: "5885 AZN",
    image:
      "https://bravotravel.az/uploads/posts/2022-12/medium/1671814845_320197824_474959374762484_6974740135922900451_n.jpg",
    link: "https://bravotravel.az/new-tours/117-bal-turu.html",
  },
  {
    id: 1,
    title: "GƏMİ TURU",
    date: "03.02.2023 - 10.02.2023",
    price: "470 EUR",
    image:
      "https://bravotravel.az/uploads/posts/2022-12/medium/1671814744_319399561_1404265310312231_1180767154768122051_n.jpg",
    link: "https://bravotravel.az/new-tours/116-gem-turu.html",
  },
  {
    id: 2,
    title: "İSTANBUL TURU",
    date: "16.01.2023 - 20.01.2023",
    price: "858 USD",
    image:
      "https://bravotravel.az/uploads/posts/2022-12/medium/1671814582_318927722_918446159123997_4786006261621954289_n.jpg",
    link: "https://bravotravel.az/new-tours/115-stanbul-turu.html",
  },
  {
    id: 3,
    title: "ŞARM - ƏL- ŞEYX TURU",
    date: "11.02.2023 - 17.02.2023",
    price: "1553 USD",
    image:
      "https://bravotravel.az/uploads/posts/2022-12/medium/1671814284_318778486_859201515268009_4533359742507559573_n.jpg",
    link: "https://bravotravel.az/new-tours/114-sarm-el-seyx-turu.html",
  },
  {
    id: 4,
    title: "DUBAYDA NOVRUZ TƏTİLİ",
    date: "17.03.2023 - 21.03.2023",
    price: "1525 USD",
    image:
      "https://bravotravel.az/uploads/posts/2022-12/medium/1671814035_318775077_534116688733795_7032595625630696824_n.jpg",
    link: "https://bravotravel.az/new-tours/113-dubayda-novruz-tetl.html",
  },
  {
    id: 5,
    title: "ISTANBUL SEVGİLİLƏR GÜNÜ",
    date: "13.02.2023 - 16.02.2023",
    price: "1027 $",
    image:
      "https://bravotravel.az/uploads/posts/2022-12/thumbs/1670236819_318027961_1104105636923431_9000607565790901101_n.jpg",
    link: "https://bravotravel.az/new-tours/112-istanbul-sevgller-gunu.html",
  },
  {
    id: 6,
    title: "SEYŞEL ADALARI",
    date: "15.04.2023 - 22.04.2023",
    price: "4320 $",
    image:
      "https://bravotravel.az/uploads/posts/2022-12/thumbs/1670236742_313744199_642864464293237_62955742268487170_n.jpg",
    link: "https://bravotravel.az/new-tours/111-seysel-adalari.html",
  },
  {
    id: 7,
    title: "SANTORİNİ - MYKONOS",
    date: "19.03.2023 - 24.03.2023",
    price: "2999 $",
    image:
      "https://bravotravel.az/uploads/posts/2022-12/thumbs/1670236589_317376347_1587710911660299_1135005269473721542_n.jpg",
    link: "https://bravotravel.az/new-tours/110-santorn-mykonos.html",
  },
  {
    id: 8,
    title: "BALİ - Mistik tropik adada unudulmaz tətil",
    date: "10.04.2023 - 17.04.2023",
    price: "2675 AZN",
    image:
      "https://bravotravel.az/uploads/posts/2022-12/thumbs/1670236495_317442380_876203460062741_5500239468445802104_n.jpg",
    link: "https://bravotravel.az/new-tours/109-bal-mistik-tropik-adada-unudulmaz-tetil.html",
  },
  {
    id: 9,
    title: "ŞARM ƏL ŞEYX",
    date: "18.03.2023 - 24.03.2023",
    price: "2340 USD",
    image:
      "https://bravotravel.az/uploads/posts/2022-12/thumbs/1670236433_316420244_135306575981074_7140874793604679837_n.jpg",
    link: "https://bravotravel.az/new-tours/108-sarm-el-seyx.html",
  },
  {
    id: 10,
    title: "GOA",
    date: "10.01.2023 - 16.01.2023",
    price: "2570 AZN",
    image:
      "https://bravotravel.az/uploads/posts/2022-12/thumbs/1670236336_317088838_135032282675170_4362932843425191754_n.jpg",
    link: "https://bravotravel.az/new-tours/107-goa.html",
  },
  {
    id: 11,
    title: "TBİLİSİ - Yeni il",
    date: "28.12.2022 - 02.01.2023",
    price: "2581 $",
    image:
      "https://bravotravel.az/uploads/posts/2022-12/thumbs/1670236213_316646683_722930792529591_3701633023910475299_n.jpg",
    link: "https://bravotravel.az/new-tours/106-tbls-yeni-il.html",
  },
];
const newTourCardsParent = document.querySelector("#new-tours .new-cards");
newTourCardsParent.innerHTML = newToursElements
  .map(
    (element) => `<a href="${element.link}" class="card">
          <img
            src="${element.image}"
            alt="${element.title}"
          />
          <div class="card-info">
            <h3>${element.title}</h3>
            <h4>${element.date}</h4>
            <div class="card-footer">
              <p>${element.price} AZN</p>
              <span>Ətraflı</span>
            </div>
          </div>
      </a>`,
  )
  .join("");

// ! Set country tours cards
const countryToursElements = [
  {
    id: 0,
    title: "Maldiv",
    description: "Bir yerüzü cənnəti",
    image:
      "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/11/IMG_5764.jpg?resize=1000%2C1500&ssl=1",
    link: "https://bravotravel.az/maldiv/",
  },
  {
    id: 1,
    title: "İstanbul",
    description: "Tarix yazan şəhər",
    image: "https://bravotravel.az/img/Istanbul.jpg",
    link: "https://bravotravel.az/istanbul/",
  },
  {
    id: 2,
    title: "Antalya",
    description: "Turizmin paytaxtı",
    image: "https://bravotravel.az/img/antalya.jpg",
    link: "https://bravotravel.az/antalya/",
  },
  {
    id: 3,
    title: "Bodrum",
    description: "Gücünü təbiətdən alan şəhər",
    image: "https://bravotravel.az/img/bodrum.jpg",
    link: "https://bravotravel.az/bodrum/",
  },
  {
    id: 4,
    title: "Kemer",
    description: "Hekayələrin diyarı",
    image: "https://bravotravel.az/img/kemer.jpg",
    link: "https://bravotravel.az/kemer/",
  },
  {
    id: 5,
    title: "Kuşadası",
    description: "Xəyalların həyata çevrildiyi yer",
    image: "https://bravotravel.az/img/kusadasi.jpg",
    link: "https://bravotravel.az/kushadasi/",
  },
  {
    id: 6,
    title: "Marmaris",
    description: "Sonsuz kəşf",
    image: "https://bravotravel.az/img/marmaris.jpg",
    link: "https://bravotravel.az/marmaris/",
  },
  {
    id: 7,
    title: "Moskva",
    description: "Gəz, gəz və yenə gəz",
    image: "https://bravotravel.az/img/moskva.jpg",
    link: "https://bravotravel.az/moscow/",
  },
  {
    id: 8,
    title: "Dubay",
    description: "Dünyanın günəşli bucağı",
    image: "https://bravotravel.az/img/dubay.jpg",
    link: "https://bravotravel.az/dubai/",
  },
  {
    id: 9,
    title: "Avropa",
    description: "İlk qərar verilən destinasiya",
    image: "https://bravotravel.az/img/avropa.jpg",
    link: "https://bravotravel.az/europe-tours/",
  },
];
let countForCountryTours = 10;
if (countForCountryTours > 10) {
  console.error(
    "Count cannot be greater than 10 because it breaks the design.",
  );
  countForCountryTours = 10;
}

const countryToursCardsParent = document.querySelector(
  "#country-tours .grid-cards",
);
countryToursCardsParent.innerHTML = countryToursElements
  .map(
    (element) => `<div class="card-grid" data-id=${element.id}>
  <a href="${element.link}" >
    <img
      src="${element.image}"
      alt="${element.title}"
    />
    <div class="overlay"></div>
    <div class="tour-info">
      <h3>${element.title}</h3>
      <p>${element.description}</p>
    </div>
  </a>
</div>`,
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
      spaceBetween: 130,
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
