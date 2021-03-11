// minimum price depending on the type of housing

const typeList = document.querySelector('#type');
const enteringThePrice = document.querySelector('#price');
const typeValue = typeList.value;

/* start min-price */

const getMinPrice = (typeValue) => {
  switch (typeValue) {
    case 'bungalow': return 0;
    case 'flat': return 1000;
    case 'house': return 5000;
    case 'palace': return 10000;
  }
}

enteringThePrice.setAttribute('min', getMinPrice(typeValue));

/* min price depending on event */

const getMinAttribute = (evt) => {
  const targetTypeValue = evt.target.value;

  enteringThePrice.setAttribute('min', getMinPrice(targetTypeValue));
  enteringThePrice.setAttribute('placeholder', getMinPrice(targetTypeValue));
};

typeList.addEventListener('change', getMinAttribute);

// check-in and check-out time

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const getTimeOutValue = () => {
  timeOut.value = timeIn.value;
}

const getTimeInValue = () => {
  timeIn.value = timeOut.value;
}

timeIn.addEventListener('change', getTimeOutValue);
timeOut.addEventListener('change', getTimeInValue);

// adress field


