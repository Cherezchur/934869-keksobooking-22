import {advertising, ADVERTISING_COUNT} from './data.js';
import {disablendingElemenets} from './page-load.js';
import {card, adTemplate} from './markup-ads.js';
// import { create } from 'browser-sync';

// loading the page and writing an address to a form

let coordinats = document.querySelector('#address');

window.onload = () => {
  disablendingElemenets();
  coordinats.setAttribute('value', `${mainMarker.getLatLng().lat} ${mainMarker.getLatLng().lng}`);
};

// create map

const mapContainer = document.querySelector('.map__canvas');

const map = L.map(mapContainer)
  .on('load', disablendingElemenets)
  .setView({
    lat: 35.4122,
    lng: 139.4130,
  }, 8);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

const mainMarker = L.marker(
  {
    lat: 35.4122,
    lng: 139.4130,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
);

mainMarker.addTo(map);

// replace address

mainMarker.on('moveend', (evt) => {
  coordinats.removeAttribute('value');
  coordinats.setAttribute('value', `${evt.target.getLatLng().lat.toFixed(4)} ${evt.target.getLatLng().lng.toFixed(4)}`);
})

// create balloon

// const createCustomPopup = () => {
//   const balloonTemplate = adTemplate;
//   return balloonTemplate;
// }

// adding points

// const cardData = advertising();
const points = new Array();

const getPointsAdress = () => {
  for (let i = 0; i < ADVERTISING_COUNT; i++) {

    // let cardDescription = adTemplate;
    let locationX = card[i].location.x;
    let locationY = card[i].location.y;
    let point = {
      // title: cardDescription,
      lat: locationX,
      lng: locationY,
    }
    points.push(point);
  }
  return points
};

const markerPoints = getPointsAdress();

markerPoints.forEach(({lat, lng}) => {
  const pointsIcon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });

  const addressMarker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: pointsIcon,
    },
  )

  addressMarker.addTo(map).bindPopup(adTemplate);

})


