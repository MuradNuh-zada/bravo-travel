const inputs = document.querySelectorAll("form input, form textarea");

if (inputs) {
  for (const input of inputs) {
    const original = input.placeholder;
    input.addEventListener("focus", () => {
      input.placeholder = "";
    });

    input.addEventListener("blur", () => {
      input.placeholder = original;
    });
  }
}

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
