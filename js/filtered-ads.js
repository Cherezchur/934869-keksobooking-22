import {initMap} from './map.js';

const ads = new Array;

// получаем данные

export const getAds = (offers) => {
  for (let i = 0 ; i < offers.length ; i++) {
    ads.push(offers[i]);
  }
  return ads;
}

// создаем общий массив

const filteredMarkers = new Array;

// пишем функцию которая инициализирует карты и передаем ей массив с метками

const newMarkersInitMap = (filteredMarkers) => {

  console.log(filteredMarkers);

  for (let i = filteredMarkers.length -1 ; i > 0 ; i--) {
    filteredMarkers.forEach((element) => {
      if (filteredMarkers[i] == element) {
        const indexOfEl = filteredMarkers.indexOf(filteredMarkers[i]);
        filteredMarkers.splice(indexOfEl, 1);
      }
    })
  }

  console.log(filteredMarkers);

  initMap(filteredMarkers);
}

// отлавливаем все события и меняем значение массива в одной функции

const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingFeatures = document.querySelector('#housing-features');
const housingFeaturesList = housingFeatures.querySelectorAll('input');
const checkedFeatures = () => {
  const checkedFeaturesArray = new Array;
  Array.from(housingFeaturesList).forEach((element) => {
    if(element.checked == true) {
      checkedFeaturesArray.push(element.value);
    }
  });
  return checkedFeaturesArray;
}

let filteredAdsType = new Array;
let filteredAdsPrice = new Array;
// let filteredAdsRooms = new Array;
// let filteredAdsGuests = new Array;
// let filteredAdsFeatures = new Array;

const markersData = (offers, filteredsArray) => {

  getAds(offers).forEach((element) => {
    filteredsArray.push(element);
  });

  for (let i = filteredsArray.length -1 ; i > 0 ; i--) {
    getAds(offers).forEach((element) => {
      if (filteredsArray[i] != element) {
        const indexOfEl = filteredMarkers.indexOf(filteredMarkers[i]);
        filteredMarkers.splice(indexOfEl, 1);
      }
    })
  }
  return filteredMarkers;
}

// type filters

const pushFilteredElementType = (selectValue, filteredAdsType) => {

  filteredAdsType.forEach((element) => {
    if (selectValue === 'any') {
      filteredAdsType.push(element);
    }
  })

  if (selectValue === 'any') {
    filteredAdsType.splice(0, filteredAdsType.length - 10);
  } else {
    for (let i = filteredAdsType.length - 1; i >= 0 ; i--) {
      if (filteredAdsType[i].offer.type != selectValue) {
        const indexOfEl = filteredAdsType.indexOf(filteredAdsType[i]);
        filteredAdsType.splice(indexOfEl, 1);
      }
    }
  }

  filteredAdsType.forEach((element) => {
    filteredMarkers.push(element);
  })

  return filteredMarkers;
};

housingType.addEventListener('change', (offers) => {

  // push data element markers

  let selectValue = housingType.value;

  if (filteredAdsType.length > 0) {
    markersData(offers, filteredAdsType);
    filteredMarkers.forEach((element) => {
      filteredAdsType.push(element);
    });
  } else {
    markersData(offers, filteredAdsType);
  }

  for (let i = filteredAdsType.length -1 ; i > 0 ; i--) {
    filteredAdsType.forEach((element) => {
      if (filteredAdsType[i] != element) {
        const indexOfEl = filteredMarkers.indexOf(filteredMarkers[i]);
        filteredMarkers.splice(indexOfEl, 1);
      }
    })
  }

  pushFilteredElementType(selectValue, filteredAdsType);
  newMarkersInitMap(filteredMarkers);
})

// price filters

const pushFilteredElementPrice = (selectValue, filteredAdsPrice) => {

  const getAdPriceValue = (element) => {
    if (element.offer.price < 10000) {
      return 'low';
    } else if (element.offer.price >= 10000 && element.offer.price <= 50000) {
      return 'middle';
    } else if (element.offer.price > 50000) {
      return 'high';
    }
  }

  filteredAdsPrice.forEach((element) => {
    if (selectValue === 'any') {
      filteredAdsPrice.push(element);
    }
  })

  if (selectValue === 'any') {
    filteredAdsPrice.splice(0, filteredAdsPrice.length - 10);
  } else {
    for (let i = filteredAdsPrice.length - 1; i >= 0 ; i--) {
      if (getAdPriceValue(filteredAdsPrice[i]) != selectValue) {
        const indexOfEl = filteredAdsPrice.indexOf(filteredAdsPrice[i]);
        filteredAdsPrice.splice(indexOfEl, 1);
      }
    }
  }

  filteredAdsPrice.forEach((element) => {
    filteredMarkers.push(element);
  })

  console.log(filteredMarkers);
};

housingPrice.addEventListener('change', (offers) => {

  let selectValue = housingPrice.value;

  console.log(filteredAdsPrice);

  if (filteredAdsPrice.length > 0) {
    markersData(offers, filteredAdsPrice);
    filteredMarkers.forEach((element) => {
      filteredAdsPrice.push(element);
    });
  } else {
    markersData(offers, filteredAdsPrice);
  }

  console.log(filteredAdsPrice);

  for (let i = filteredAdsPrice.length -1 ; i > 0 ; i--) {
    filteredAdsPrice.forEach((element) => {
      if (filteredAdsPrice[i] != element) {
        const indexOfEl = filteredMarkers.indexOf(filteredMarkers[i]);
        filteredMarkers.splice(indexOfEl, 1);
      }
    })
  }

  pushFilteredElementPrice(selectValue, filteredAdsPrice);
  initMap(filteredMarkers);

  console.log(filteredMarkers);
})


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


