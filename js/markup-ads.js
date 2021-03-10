import {advertising} from './data.js';

// find the block for the final rendering of the ad

// const adOutput = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const card = advertising();

const adTemplate = cardTemplate.cloneNode(true);

card.forEach((adElement) => {
  adTemplate.querySelector('.popup__avatar').setAttribute('src', adElement.autor.avatar);
  adTemplate.querySelector('.popup__title').textContent = adElement.offer.title;
  adTemplate.querySelector('.popup__text--address').textContent = adElement.offer.address;
  adTemplate.querySelector('.popup__text--price').innerHTML = adElement.offer.price + ' <span>₽/ночь</span>';

  const typeOfHousing = () => {
    const type = adElement.offer.type;
    switch (type) {
      case 'palace': return 'Дворец';
      case 'flat': return 'Квартира';
      case 'bungalow': return 'Бунгало';
      case 'house': return 'Дом';
    }
  }
  adTemplate.querySelector('.popup__type').textContent = typeOfHousing();

  adTemplate.querySelector('.popup__text--capacity').textContent = adElement.offer.rooms + ' комнаты для ' + adElement.offer.guests + ' гостей';
  adTemplate.querySelector('.popup__text--time').textContent = 'Заезд после ' + adElement.offer.checkin + ', выезд до ' + adElement.offer.checkout;

  const featuresBlock = adTemplate.querySelector('.popup__features');
  const getRemoveFeaturesBlock = () => {
    for (let i = featuresBlock.children.length - 1; i >= 0; i--) {
      const featuresChild = featuresBlock.children[i];
      featuresChild.parentElement.removeChild(featuresChild);
    }
  }
  const getAddFeatures = () => {
    for (let i = 0; i < adElement.offer.features.length; i++) {
      const feature = document.createElement('li');
      feature.classList.add('popup__feature')
      feature.classList.add('popup__feature--' + adElement.offer.features[i]);
      featuresBlock.appendChild(feature);
    }
  }
  getRemoveFeaturesBlock();
  getAddFeatures();

  adTemplate.querySelector('.popup__description').textContent = adElement.offer.description;

  const photosBlock = adTemplate.querySelector('.popup__photos');
  const photo = photosBlock.querySelector('.popup__photo');
  photosBlock.removeChild(photo);
  const getAddPhoto = () => {
    for (let i = 0; i < adElement.offer.photos.length; i++) {
      const photoContainer = photo.cloneNode(true);
      photoContainer.setAttribute('src', adElement.offer.photos[i]);
      photosBlock.appendChild(photoContainer);
    }
  }
  getAddPhoto();
  return adTemplate;
})

export {card, adTemplate};
