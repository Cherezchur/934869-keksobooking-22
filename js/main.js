//function for finding random values

const getRandomNumber = function (firstNumber, lastNumber) {
  return Math.random() * (lastNumber - firstNumber +1) + firstNumber;
}

const getRandomInteger = function (firstInteger, lastInteger) {
  let randomInteger;

  if (firstInteger > lastInteger || firstInteger === lastInteger) {
    randomInteger = 'Введите корректные значения диапазона';
  } else {
    randomInteger = Math.floor(getRandomNumber(firstInteger, lastInteger));
  }

  return randomInteger;
}

const getRandomCoordinates = function (firstCoordinates, lastCoordinates, decimal) {
  let randomCoordinates;

  if (firstCoordinates > lastCoordinates || firstCoordinates === lastCoordinates) {
    randomCoordinates = 'Введите корректные значения диапазона';
  } else {
    randomCoordinates = getRandomNumber(firstCoordinates, lastCoordinates);
  }

  return randomCoordinates.toFixed(decimal);
}

getRandomInteger(2, 7);
getRandomCoordinates(2, 7, 3);

// function for create new array with random number element and not repeating elements

const getRandomNonReapetingArray = function (dataArray) {
  const getRandomNumber= () => {
    let feature = dataArray[getRandomInteger(0, dataArray.length - 1)];
    return feature;
  }
  const getRandomNumberArray = new Array(getRandomInteger(0,5)).fill(null).map(() => getRandomNumber());

  const getRandomNonRepeating = getRandomNumberArray.reduce((x, y) => x.includes(y) ? x : [...x, y], []);

  return getRandomNonRepeating
}

// create advertising object

// create autor

const getAvatarAdress = () => {
  let avatarAdress = 'img/avatars/user0' + getRandomInteger(1, 8) + '.png';
  return avatarAdress;
}

// create title

const TITLE = [
  'The attic', 'Квартира №25' , 'Ласточкино гнездо' ,
  'Undegraund' , 'Hipster house' , 'Уют' , 'Квартира №5, улица Героев' ,
  'Grand Hotel Place' , 'Home hotel' , 'Sweet rooms',
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
  'Тихое, уютное гнездышко', 'Небольшая квартирка с удобной транспортной развязкой' , 'Пентхаус с видом на море' ,
  'Подвальное андеграунд помещение' , 'Хипстеркий уголок' , 'Домик с терассой' , 'Квартира в элитном районе' ,
  'Номер в отеле бизнес-класса' , 'Номер в квартале баров' , 'Комната-конфетка',
];

// create photos

const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']


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

const advertising = new Array(10).fill(null).map(() => createAd());

advertising;



