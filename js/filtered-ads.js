import {initMap} from './map.js';
import {ads} from './main.js'

const housingType = document.querySelector('#housing-type');
// const housingPrice = document.querySelector('#housing-price');
// const housingRooms = document.querySelector('#housing-rooms');
// const housingGuests = document.querySelector('#housing-guests');
// const housingFeatures = document.querySelector('#housing-features');
// const housingFeaturesList = housingFeatures.querySelectorAll('input');
// const checkedFeatures = () => {
//   const checkedFeaturesArray = new Array;
//   Array.from(housingFeaturesList).forEach((element) => {
//     if(element.checked == true) {
//       checkedFeaturesArray.push(element.value);
//     }
//   });
//   return checkedFeaturesArray;
// }

// const adsArray = (offers) => {

// }

const getFilteredAds = (ads) => {

  const filteredAds = new Array;

  ads.forEach((element) => {
    if (element.offer.type === housingType.value) {
      filteredAds.push(element);
    }
  })

  return filteredAds;
}

housingType.addEventListener('change', () => {
  const filteredAdsArray = getFilteredAds(ads);
  // markerPoints = [];
  initMap(filteredAdsArray);
  // console.log(map);
})

// export {adsArray};

// const getAdsRank = (ad) => {

//   let rank = 0;

//   const getAdPriceValue = () => {
//     if (ad.offer.price < 10000) {
//       return 'low';
//     } else if (10000 >= ad.offer.price <= 5000) {
//       return 'middle';
//     } else if (ad.offer.price >= 5000) {
//       return 'high';
//     }
//   }

//   if (getAdPriceValue() == housingPrice.value) {
//     rank +=2;
//   }

//   if (ad.offer.rooms == housingRooms.value) {
//     rank +=2;
//   }

//   const getAdGuestsValue = () => {
//     if (ad.offer.guests == 1) {
//       return 1;
//     } else if (ad.offer.guests == 2) {
//       return 2;
//     } else if (ad.offer.guests > 2) {
//       return 0;
//     }
//   }

//   if (getAdGuestsValue() == housingGuests.value) {
//     rank +=2
//   }

//   checkedFeatures().forEach((element) => {
//     ad.offer.features.some((value) => {
//       if (value == element) {
//         rank +=1;
//       }
//     })
//   });

//   return rank;
// }
