import {propertyAdd} from './date.js';

const similarAd = document.querySelector('#card').content.querySelector('.popup');
const map = document.querySelector('#map-canvas');
const adFragment = document.createDocumentFragment();

const generateElements = (item) => {
  const similarAdPopup = similarAd.cloneNode(true);

  similarAdPopup.querySelector('.popup__title').textContent = item.offer.title;
  similarAdPopup.querySelector('.popup__text--address').textContent = item.offer.address;
  similarAdPopup.querySelector('.popup__text--price').textContent = item.offer.price + ' ₽/ночь';
  similarAdPopup.querySelector('.popup__text--capacity').textContent = item.offer.rooms + ' комнаты для ' + item.offer.guests + ' гостей';
  similarAdPopup.querySelector('.popup__text--time').textContent = 'Заезд после ' + item.offer.checkin + ', выезд до ' + item.offer.checkout;
  similarAdPopup.querySelector('.popup__description').textContent = item.offer.description;
  similarAdPopup.querySelector('.popup__avatar').src = item.author.avatar;

  switch(item.offer.type) {
    case 'flat':
      similarAdPopup.querySelector('.popup__type').textContent = 'Квартира';
      break;
    case 'bungalow':
      similarAdPopup.querySelector('.popup__type').textContent = 'Бунгало';
      break;
    case 'house':
      similarAdPopup.querySelector('.popup__type').textContent = 'Квартира';
      break;
    case 'palace':
      similarAdPopup.querySelector('.popup__type').textContent = 'Дворец';
      break;
  }

  item.offer.photos.forEach((photo) => {
    const photoContainer = `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
    similarAdPopup.querySelector('.popup__photos').insertAdjacentHTML('beforeend', photoContainer);
  });

  item.offer.features.forEach((feature) => {
    const featureContainer = `<li class="popup__feature popup__feature--${feature}"></li>`;
    similarAdPopup.querySelector('.popup__feature').insertAdjacentHTML('beforeend', featureContainer);
  });

  adFragment.appendChild(similarAdPopup);
  return adFragment;
};

map.appendChild(propertyAdd());
export {generateElements};
