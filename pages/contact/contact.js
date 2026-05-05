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
