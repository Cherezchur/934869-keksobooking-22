const getRandomInteger = function (firstInteger, lastInteger) {
  let randomInteger;

  if (firstInteger > lastInteger || firstInteger === lastInteger) {
    randomInteger = 'Введите корректные значения диапазона';
  } else {
    randomInteger = Math.floor(Math.random() * (lastInteger - firstInteger +1) + firstInteger);
  }

  return randomInteger
}

const getRandomCoordinates = function (firstCoordinates, lastCoordinates, decimal) {
  let randomCoordinates;

  if (firstCoordinates > lastCoordinates || firstCoordinates === lastCoordinates) {
    randomCoordinates = 'Введите корректные значения диапазона';
  } else {
    randomCoordinates = Math.random() * (lastCoordinates - firstCoordinates + 1) + firstCoordinates;
  }

  return randomCoordinates.toFixed(decimal);
}

getRandomInteger(2, 7);
getRandomCoordinates(2, 7, 3);
