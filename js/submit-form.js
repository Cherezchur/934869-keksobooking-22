import {mainMarker, map, addingCoordinatesToAddress} from './map.js';
import {adForm, clearingForm} from './form-logics.js';

// submitting a form

const ALERT_SHOW_TIME = 4000;
const resetFormButton = document.querySelector('.ad-form__reset');

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const removeMainMarker = () => {
  mainMarker.remove();
  mainMarker.getLatLng().lat = 35.4122;
  mainMarker.getLatLng().lng = 139.4130;
  mainMarker.addTo(map);
  addingCoordinatesToAddress();
}

const showSuccessfulSendingMessage = () => {
  const successTemplate = document.querySelector('#success').content.cloneNode(true);
  document.body.appendChild(successTemplate);

  const removeSuccessfulSendingMessage = () => {
    document.body.removeChild(document.querySelector('.success'));
  }

  setTimeout (() => {
    removeSuccessfulSendingMessage();
  }, ALERT_SHOW_TIME);

  document.addEventListener('click', () => {
    removeSuccessfulSendingMessage();
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      removeSuccessfulSendingMessage();
    }
  });

  removeMainMarker();
  clearingForm();
};

const errorMessageShow = () => {
  const errorMessage = document.querySelector('#error').content.cloneNode(true);
  document.body.appendChild(errorMessage);

  const errorMessageElement = document.querySelector('.error');

  const removeMessageShow = () => {
    document.body.removeChild(errorMessageElement);
  }

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      removeMessageShow();
    }
  });

  document.addEventListener('click', () => {
    removeMessageShow();
  });

  errorMessageElement.querySelector('.error__button').addEventListener('click', () => {
    removeMessageShow();
  })
};

const setUserForSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {

    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://22.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    ).then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        errorMessageShow();
      }
    });
  });
}

resetFormButton.addEventListener('click', () => {
  removeMainMarker();
  clearingForm();
})

export {setUserForSubmit, showSuccessfulSendingMessage};
