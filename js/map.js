/* global L:readonly */

// import {ADVERTISING_COUNT} from './data.js';
import {disablendingElemenets} from './page-load.js';
// import {card, cardPopup} from './markup-ads.js';

// loading the page and writing an address to a form

const coordinats = document.querySelector('#address');

const addingCoordinatesToAddress = () => {
  coordinats.setAttribute('value', `${mainMarker.getLatLng().lat} ${mainMarker.getLatLng().lng}`);
}

window.onload = () => {
  disablendingElemenets();
  addingCoordinatesToAddress();
};

// create map

const mapContainer = document.querySelector('.map__canvas');

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

mainMarker.addTo(map);

// replace address

mainMarker.on('moveend', (evt) => {
  coordinats.removeAttribute('value');
  coordinats.setAttribute('value', `${evt.target.getLatLng().lat.toFixed(5)} ${evt.target.getLatLng().lng.toFixed(5)}`);
})

// create markers

// const points = new Array();

// const getPointsAdress = () => {
//   for (let i = 0; i < ADVERTISING_COUNT; i++) {

//     let cardDescription = cardPopup(i);
//     let locationX = card[i].location.x;
//     let locationY = card[i].location.y;
//     let point = {
//       adDescription: cardDescription,
//       lat: locationX,
//       lng: locationY,
//     }
//     points.push(point);
//   }
//   return points
// };

// const markerPoints = getPointsAdress();

// markerPoints.forEach(({lat, lng, adDescription}) => {
//   const pointsIcon = L.icon({
//     iconUrl: '../img/pin.svg',
//     iconSize: [50, 50],
//     iconAnchor: [25, 50],
//   });

//   const addressMarker = L.marker(
//     {
//       lat,
//       lng,
//     },
//     {
//       icon: pointsIcon,
//     },
//   )

//   addressMarker.addTo(map).bindPopup(adDescription);
// })

export {mainMarker, map, addingCoordinatesToAddress};
