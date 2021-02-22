import {getRandomInteger, getRandomCoordinates, getRandomNonReapetingArray} from './util.js';

// create advertising object

// create autor

const getAvatarAdress = () => {
  let avatarAdress = 'img/avatars/user0' + getRandomInteger(1, 8) + '.png';
  return avatarAdress;
}

// create title

const TITLE = [
  'The attic', 'Квартира №25', 'Ласточкино гнездо',
  'Undegraund', 'Hipster house', 'Уют', 'Квартира №5, улица Героев',
  'Grand Hotel Place', 'Home hotel', 'Sweet rooms',
];

// create price

const PRICE = [
  13133, 12745, 600, 9300, 83400, 20200, 45900, 3000, 400, 74395,
];

// create type

const TYPE = ['palace', 'flat', 'house', 'bungalow'];

// create checkin and checkout

const TIMECHECK = ['12:00', '13:00', '14:00'];

// features

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

// create discription

const DISCRIPTION = [
  'Тихое, уютное гнездышко', 'Небольшая квартирка с удобной транспортной развязкой', 'Пентхаус с видом на море',
  'Подвальное андеграунд помещение', 'Хипстеркий уголок', 'Домик с терассой', 'Квартира в элитном районе',
  'Номер в отеле бизнес-класса', 'Номер в квартале баров', 'Комната-конфетка',
];

// create photos

const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

// function for finding array consisting of ten objects

const createAd = () => {
  return {
    autor: {
      avatar: getAvatarAdress(),
    },
    offer: {
      title: TITLE[getRandomInteger(0,9)],
      address: getRandomCoordinates(35.65000, 35.70000, 5) + ' ' + getRandomCoordinates(139.70000, 139.80000, 5),
      price: PRICE[getRandomInteger(0,9)],
      type: TYPE[getRandomInteger(0,3)],
      rooms: getRandomInteger(0,10),
      guests: getRandomInteger(0,20),
      checkin: TIMECHECK[getRandomInteger(0,2)],
      checkout: TIMECHECK[getRandomInteger(0,2)],
      features: getRandomNonReapetingArray(FEATURES),
      description: DISCRIPTION[getRandomInteger(0,9)],
      photos: getRandomNonReapetingArray(PHOTOS),
    },
    location: {
      x: getRandomCoordinates(35.65000, 35.70000, 5),
      y: getRandomCoordinates(139.70000, 139.80000, 5),
    },
  };
};

const ADVERTISING_COUNT = 1;

const advertising = () => new Array(ADVERTISING_COUNT).fill(null).map(() => createAd());

advertising;

export {advertising};
