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

// room number and capacity

const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

const capacityValidity = (value) => {
  let acceptableValues = [];
  if (value == 1) {
    acceptableValues = [1];
  } else if (value == 2) {
    acceptableValues = [1, 2];
  } else if (value == 3) {
    acceptableValues = [1, 2, 3];
  } else if (value == 100) {
    acceptableValues = [0];
  }
  return acceptableValues;
}

const addDisabled = () => {
  Array.from(capacity.children).forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};

addDisabled();

const selectedCapacityElement = () => {
  Array.from(roomNumber.children).forEach((roomElement) => {
    if (roomElement.hasAttribute('selected')) {
      Array.from(capacity.children).forEach((element) => {
        if (element.value == roomElement.value) {
          element.setAttribute('selected', 'selected');
          element.removeAttribute('disabled');
        }
      });
    }
  })
}

selectedCapacityElement();

roomNumber.addEventListener('change', (evt) => {

  addDisabled();

  const valueTarget = evt.target.value;

  Array.from(capacity.children).forEach((element) => {
    element.removeAttribute('selected', 'selected');
  });

  Array.from(capacity.children).forEach((element) => {
    if (element.value == valueTarget) {
      element.setAttribute('selected', 'selected');
    }
  });

  if (valueTarget == 100) {
    Array.from(capacity.children).forEach((element) => {
      if (element.value == 0) {
        element.setAttribute('selected', 'selected');
      }
    });
  }

  capacityValidity(valueTarget).forEach((roomValues) => {
    Array.from(capacity.children).forEach((element) => {
      if (element.value == roomValues) {
        element.removeAttribute('disabled', 'disabled');
      }
    });
    if (roomValues == 100) {
      Array.from(capacity.children).forEach((element) => {
        if (element.value == 0) {
          element.removeAttribute('disabled', 'disabled');
          element.setAttribute('selected', 'selected');
        }
      });
    }
  })
})






