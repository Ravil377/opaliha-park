
if(document.querySelector('[id="map"]')) ymaps.ready(init);

function init() {
  let map = new ymaps.Map('map', {
    center: [55.82642251580028,37.212677546347415],
    zoom: 16.5,
  });

  let placemark = new ymaps.Placemark([55.826393895535986,37.211750146266915], {
    hintContent: '',
    balloonContent: ''
  }, {
    iconLayout: 'default#image',
    // iconImageHref: 'img/content/placemark.png',
    // Размеры метки.
    iconImageSize: [38, 55],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-25, -40]
  });

  map.geoObjects.add(placemark);
}