/* global L:readonly */

import {disablendingElemenets} from './page-load.js';
import {cardPopup } from './markup-ads.js';
// import {getFilteredAds} from './filtered-ads.js';

// const NUMBER_OF_ADS = 10;
const coordinats = document.querySelector('#address');

const addingCoordinatesToAddress = () => {
  coordinats.setAttribute('value', `${mainMarker.getLatLng().lat} ${mainMarker.getLatLng().lng}`);
}

window.onload = () => {
  disablendingElemenets();
  addingCoordinatesToAddress();
};

// create main marker

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

mainMarker.on('moveend', (evt) => {
  coordinats.removeAttribute('value');
  coordinats.setAttribute('value', `${evt.target.getLatLng().lat.toFixed(5)} ${evt.target.getLatLng().lng.toFixed(5)}`);
})

// create map

const mapContainer = document.querySelector('.map__canvas');

let map = L.map(mapContainer)
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

// const pointsIcon = L.icon({
//   iconUrl: '../img/pin.svg',
//   iconSize: [50, 50],
//   iconAnchor: [25, 50],
// });

// const addressMarker = (lat, lng) => {
//   const marker = L.marker(
//     {
//       lat,
//       lng,
//     },
//     {
//       icon: pointsIcon,
//     },
//   )
//   return marker;
// }

let markerPoints = new Array;

const initMap = (offers) => {

  console.log('initMap');

  markerPoints = getPointsAdress(offers);
  markerPoints.forEach(({lat, lng, adDescription}) => {

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
    addressMarker.addTo(map).bindPopup(adDescription);
  })
  console.log(markerPoints);
}

// create markers

const points = new Array();

const getPointsAdress = (offers) => {

  for (let i = 0; i < offers.length ; i++) {

    let cardDescription = cardPopup(offers[i]);
    let locationX = offers[i].location.lat;
    let locationY = offers[i].location.lng;
    let point = {
      adDescription: cardDescription,
      lat: locationX,
      lng: locationY,
    }
    points.push(point);
  }
  return points
};

export {mainMarker, addingCoordinatesToAddress, map, initMap, markerPoints};
