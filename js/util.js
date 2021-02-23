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

// function for create new array with random number element and not repeating elements

const getRandomNonReapetingArray = function (dataArray) {
  const getRandomNumber = () => {
    const randomNumberArray = dataArray[getRandomInteger(0, dataArray.length - 1)];
    return randomNumberArray;
  }
  const getRandomNumberArray = new Array(getRandomInteger(0,5)).fill(null).map(() => getRandomNumber());

  const getRandomNonRepeating = getRandomNumberArray.reduce((x, y) => x.includes(y) ? x : [...x, y], []);

  return getRandomNonRepeating
}

export {getRandomInteger, getRandomCoordinates, getRandomNonReapetingArray};
