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

  if (firstCoordinates > lastCoordinates || firstCoordinates === lastCoordinates) {
    randomCoordinates = 'Введите корректные значения диапазона';
  } else {
    randomCoordinates = Math.random() * (lastCoordinates - firstCoordinates + 1) + firstCoordinates;
  }

  return randomCoordinates.toFixed(decimal);
}

console.log(getRandomInteger(0, 2));
console.log(getRandomCoordinates(0, 2, 2));
