// minimum price depending on the type of housing

const typeList = document.querySelector('#type');
const enteringThePrice = document.querySelector('#price');

/* start min-price */

const getMinPrice = (typeValue) => {
  typeValue = typeList.value;
  switch (typeValue) {
    case 'bungalow': return 0;
    case 'flat': return 1000;
    case 'house': return 5000;
    case 'palace': return 10000;
  }
}
enteringThePrice.setAttribute('min', getMinPrice());

/* min price depending on event */

const getMinAttribute = (evt) => {
  let targetTypeValue = evt.target.value;

  enteringThePrice.setAttribute('min', getMinPrice(targetTypeValue));
};

typeList.addEventListener('change', getMinAttribute);

// check-in and check-out time

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const getTimeOutValue = () => {
  timeOut.value = timeIn.value;
}

timeIn.addEventListener('change', getTimeOutValue);
