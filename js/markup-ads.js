import {advertising} from './data.js';

// find the block for the final rendering of the ad

// const adOutput = document.querySelector('.map__canvas');
const card = advertising();

const cardPopup = (i) => {
  const cardObject = card[i];
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const adTemplate = cardTemplate.cloneNode(true);

  adTemplate.querySelector('.popup__avatar').setAttribute('src', cardObject.autor.avatar);
  adTemplate.querySelector('.popup__title').textContent = cardObject.offer.title;
  adTemplate.querySelector('.popup__text--address').textContent = cardObject.offer.address;
  adTemplate.querySelector('.popup__text--price').innerHTML = cardObject.offer.price + ' <span>₽/ночь</span>';

  const typeOfHousing = () => {
    const type = cardObject.offer.type;
    switch (type) {
      case 'palace': return 'Дворец';
      case 'flat': return 'Квартира';
      case 'bungalow': return 'Бунгало';
      case 'house': return 'Дом';
    }
  }
  adTemplate.querySelector('.popup__type').textContent = typeOfHousing();

  adTemplate.querySelector('.popup__text--capacity').textContent = cardObject.offer.rooms + ' комнаты для ' + cardObject.offer.guests + ' гостей';
  adTemplate.querySelector('.popup__text--time').textContent = 'Заезд после ' + cardObject.offer.checkin + ', выезд до ' + cardObject.offer.checkout;

  const featuresBlock = adTemplate.querySelector('.popup__features');
  const getRemoveFeaturesBlock = () => {
    for (let i = featuresBlock.children.length - 1; i >= 0; i--) {
      const featuresChild = featuresBlock.children[i];
      featuresChild.parentElement.removeChild(featuresChild);
    }
  }
  const getAddFeatures = () => {
    for (let i = 0; i < cardObject.offer.features.length; i++) {
      const feature = document.createElement('li');
      feature.classList.add('popup__feature')
      feature.classList.add('popup__feature--' + cardObject.offer.features[i]);
      featuresBlock.appendChild(feature);
    }
  }
  getRemoveFeaturesBlock();
  getAddFeatures();

  adTemplate.querySelector('.popup__description').textContent = cardObject.offer.description;

  const photosBlock = adTemplate.querySelector('.popup__photos');
  const photo = photosBlock.querySelector('.popup__photo');
  photosBlock.removeChild(photo);
  const getAddPhoto = () => {
    for (let i = 0; i < cardObject.offer.photos.length; i++) {
      const photoContainer = photo.cloneNode(true);
      photoContainer.setAttribute('src', cardObject.offer.photos[i]);
      photosBlock.appendChild(photoContainer);
    }
  }
  getAddPhoto();
  return adTemplate;
}

export {card, cardPopup};
