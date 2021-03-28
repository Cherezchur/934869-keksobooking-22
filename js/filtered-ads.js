import {initMap} from './map.js';

const ads = new Array;

// получаем данные

export const getAds = (offers) => {
  for (let i = 0 ; i < offers.length ; i++) {
    ads.push(offers[i]);
  }
  return ads;
}

// отлавливаем change на форме и записываем значение в value

const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingFeatures = document.querySelector('#housing-features');
const housingFeaturesList = housingFeatures.querySelectorAll('input');
// const checkedFeaturesArray = new Array;
// Array.from(housingFeaturesList).forEach((element) => {
//   if(element.checked == true) {
//     checkedFeaturesArray.push(element.value);
//   }
// });


// const filteredForm = document.addEventListener('.map__filters');

let selectedValueOfTypeFilter = 'any';
let selectedValueOfPriceFilter = 'any';
let selectedValueOfRoomsFilter = 'any';
let selectedValueOfGuestsFilter = 'any';
let checkedFeaturesArray = new Array;

const initializingFilteredAds = (offers) => {
  getFilteredAds(offers, selectedValueOfTypeFilter, selectedValueOfPriceFilter, selectedValueOfRoomsFilter, selectedValueOfGuestsFilter, checkedFeaturesArray);
}

housingType.addEventListener('change', (offers) => {
  selectedValueOfTypeFilter = housingType.value;
  initializingFilteredAds(offers);
})

housingPrice.addEventListener('change', (offers) => {
  selectedValueOfPriceFilter = housingPrice.value;
  initializingFilteredAds(offers);
})

housingRooms.addEventListener('change', (offers) => {
  selectedValueOfRoomsFilter = housingRooms.value;
  initializingFilteredAds(offers);
})

housingGuests.addEventListener('change', (offers) => {
  selectedValueOfGuestsFilter = housingGuests.value;
  initializingFilteredAds(offers);
})



housingFeaturesList[0].addEventListener('change', (offers) => {

  Array.from(housingFeaturesList).forEach((element) => {
    if(element.checked == true) {
      checkedFeaturesArray.push(element.value);
    }
  });

  // selectedValueOfFeaturesFilter = () => {
  //   const checkedFeaturesArray = new Array;
  //   Array.from(housingFeaturesList).forEach((element) => {
  //     if(element.checked == true) {
  //       checkedFeaturesArray.push(element.value);
  //     }
  //   });
  //   return checkedFeaturesArray;
  // }

  // checkedFeaturesArray = housingGuests.value;
  initializingFilteredAds(offers);
})

// пишем функцию которая фильтрует наши объявления передаем в нее offers

const getFilteredAds = (offers, selectedValueOfTypeFilter, selectedValueOfPriceFilter, selectedValueOfRoomsFilter, selectedValueOfGuestsFilter, selectedValueOfFeaturesFilter) => {

  // создаем массив из всех объявлений

  const filteredMarkers = new Array;

  getAds(offers).forEach((element) => {
    filteredMarkers.push(element);
  })

  // type

  if (selectedValueOfTypeFilter !== 'any') {
    for (let i = filteredMarkers.length - 1; i >= 0 ; i--) {
      if (filteredMarkers[i].offer.type !== selectedValueOfTypeFilter) {
        const indexOfEl = filteredMarkers.indexOf(filteredMarkers[i]);
        filteredMarkers.splice(indexOfEl, 1);
      }
    }
  }

  console.log(filteredMarkers);

  // price

  const getAdPriceValue = (element) => {
    if (element.offer.price < 10000) {
      return 'low';
    } else if (element.offer.price >= 10000 && element.offer.price <= 50000) {
      return 'middle';
    } else if (element.offer.price > 50000) {
      return 'high';
    }
  }

  if (selectedValueOfPriceFilter !== 'any') {
    for (let i = filteredMarkers.length - 1; i >= 0 ; i--) {
      if (getAdPriceValue(filteredMarkers[i]) !== selectedValueOfPriceFilter) {
        const indexOfEl = filteredMarkers.indexOf(filteredMarkers[i]);
        filteredMarkers.splice(indexOfEl, 1);
      }
    }
  }


  // rooms

  if (selectedValueOfRoomsFilter !== 'any') {
    for (let i = filteredMarkers.length - 1; i >= 0 ; i--) {
      if (filteredMarkers[i].offer.rooms != selectedValueOfRoomsFilter) {
        const indexOfEl = filteredMarkers.indexOf(filteredMarkers[i]);
        filteredMarkers.splice(indexOfEl, 1);
      }
    }
  }

  // guests

  const getAdGuestsValue = (element) => {
    if (element.offer.guests == 1) {
      return 1;
    } else if (element.offer.guests == 2) {
      return 2;
    } else if (element.offer.guests > 2) {
      return 0;
    }
  }

  if (selectedValueOfGuestsFilter !== 'any') {
    for (let i = filteredMarkers.length - 1; i >= 0 ; i--) {
      if (getAdGuestsValue(filteredMarkers[i]) != selectedValueOfGuestsFilter) {
        const indexOfEl = filteredMarkers.indexOf(filteredMarkers[i]);
        filteredMarkers.splice(indexOfEl, 1);
      }
    }
  }

  // features

  if (checkedFeaturesArray.length > 0) {


    for (let i = filteredMarkers.length - 1; i >= 0 ; i--) {
      const adFeatures = filteredMarkers[i].offer.features;
      for (let j = adFeatures.length - 1; j >= 0 ; j--) {
        checkedFeaturesArray.forEach((element) => {
          if (adFeatures[j] !== element) {
            const indexOfEl = filteredMarkers.indexOf(filteredMarkers[i]);
            filteredMarkers.splice(indexOfEl, 1);
          }
        })
      }

    }

    // const featuresArray = filteredMarkers[i].offer.features;
    // console.log(featuresArray);
    // checkedFeaturesArray.forEach((element) => {
    //   filteredMarkers[i].offer.features.forEach((el) => {
    //     if (el !== element) {
    //       const indexOfEl = filteredMarkers.indexOf(filteredMarkers[i]);
    //       filteredMarkers.splice(indexOfEl, 1);
    //     }
    //   })
    // })
  }

  // checkedFeatures().forEach((element) => {
  //   ad.offer.features.some((value) => {
  //     if (value == element) {
  //       rank +=1;
  //     }
  //   })
  // });

  console.log(filteredMarkers);

  initMap(filteredMarkers);
}

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
