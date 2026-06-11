const services = [
  {
    title: "Otel rezervasiyaları",
    description: "Dünyanın hər yerində komfortlu istirahət",
    url: "https://bravotravel.az/hotel/",
    image: "https://bravotravel.az/img/hotel.png",
  },
  {
    title: "Aviabiletlər",
    description: "Ən münasib qiymətə və komfortlu uçuşlar",
    url: "https://bravotravel.az/aviabilet/",
    image: "https://bravotravel.az/img/aeroplane.png",
  },
  {
    title: "VİP xidmətlər",
    description: "Ən yüksək komfort səyahət və lüks istirahət",
    url: "https://bravotravel.az/vip/",
    image: "https://bravotravel.az/img/vip.png",
  },
  {
    title: "Korporativ biletlər",
    description: "Əməkdaş və qonaqlarınızın korporativ qiymətlərlə səyahəti",
    url: "https://bravotravel.az/ticket/",
    image: "https://bravotravel.az/img/ticket.png",
  },
  {
    title: "Viza Dəstəyi",
    description: "Şengen, ABŞ, Böyük Britaniya, və s. ölkələr",
    url: "https://bravotravel.az/visa/",
    image: "https://bravotravel.az/img/visa.png",
  },
  {
    title: "Biznes Turizmi",
    description: "Korporativ müştərilərimiz üçün tam biznes səyahət",
    url: "https://bravotravel.az/tourism/",
    image: "https://bravotravel.az/img/teamwork.png",
  },
  {
    title: "Transfer",
    description: "Səyahət etdiyiniz şəhərlərdə transfer və Rent a Car xidməti",
    url: "https://bravotravel.az/transfer/",
    image: "https://bravotravel.az/img/car.png",
  },
  {
    title: "Sığorta",
    description: "Təhlükəsiz bir səyahət üçün sığorta xidməti",
    url: "https://bravotravel.az/insurance/",
    image: "https://bravotravel.az/img/insurance.png",
  },
  {
    title: "Sağlamlıq Turizmi",
    description: "Dünyanın ən uğurlu klinikalarında müalicə bizdə",
    url: "https://bravotravel.az/healthing/",
    image: "https://bravotravel.az/img/healhing.png",
  },
  {
    title: "Xarici və Daxili turlar",
    description: "Dünyanın hər istiqamətinə, turizmin bütün sahələri üzrə",
    url: "https://bravotravel.az/global_tours/",
    image: "https://bravotravel.az/img/tour.png",
  },
  {
    title: "Qrup turları",
    description: "Dünyanı tanımaq üçün bol ekskursiyalar",
    url: "https://bravotravel.az/group_tours/",
    image: "https://bravotravel.az/img/group.png",
  },
  {
    title: "Kruiz səyahəti",
    description: "Dünyanı dəniz və okeanlarla səyahət edin",
    url: "https://bravotravel.az/cruise/",
    image: "https://bravotravel.az/img/cruise.png",
  },
  {
    title: "Komanda inkişafı",
    description: "Kollektivinizin komanda şəklində səyahəti",
    url: "https://bravotravel.az/team/",
    image: "https://bravotravel.az/img/team.png",
  },
  {
    title: "Təcili dəstək",
    description: "Səyahətiniz müddətində 24/7 təcili dəstək",
    url: "https://bravotravel.az/support/",
    image: "https://bravotravel.az/img/support.png",
  },
];

let cards = document.querySelector(".service-cards");

cards.innerHTML = services
  .map(
    (service) => `<a href="${service.url}" class="card">
              <div class="card-head">
                <img src="${service.image}" alt="hotel" />
              </div>
              <div class="card-text">
                <h4>${service.title}</h4>
                <p>${service.description}</p>
              </div>
            </a>`,
  )
  .join("");

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
