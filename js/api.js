import {adForm} from './form-logics.js';
import {errorMessageShow} from './submit-form.js';

const ALERT_SHOW_TIME = 4000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    })
    .catch(() => {
      showAlert('При загрузке данных произошла ошибка');
    })
};

const initSubmitForm = (onSuccess) => {
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

export {getData, initSubmitForm};
