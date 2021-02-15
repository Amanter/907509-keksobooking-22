'use strict';

import './util.js';
import './data.js';


import {getRandomInt, getRandomNumber, getArrayRandElement} from './util.js';

const SIMILAR_OBJECT_COUNT = 10;
const TITLE = ['Самое выгодное предложение', 'Для молодожёнов', 'Скидки пенсионерам'];
const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const DESCRIPTIONS = ['Просторное', 'Доступное', 'Вместительное', 'Потрясающее'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

//функция генерации случайного числа
function getRandomInt(min, max) {
  if ( min < 0 || min > max) {
    return 'Задан неверный диапазон';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//функция генерации случайного числа (после рефакторинга)
function getRandomNumber(min, max, floatNumber) {
  if ( min < 0 || min > max) {
    return 'Задан неверный диапазон';
  }
  return +((Math.random() * (max - min)) + min).toFixed(floatNumber);
}

//функция возврата из массива случайного элемента
// Определяем любой массив
function getArrayRandElement(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];}

export {getRandomInt, getRandomNumber, getArrayRandElement};

//функция генерации обьектов
const createAdds = () => {
  return {
    author: {
      avatar: 'img/avatars/user' + ('0'+getRandomInt(1, 8)) + '.png',
    },

    location: {
      locationX: getRandomNumber(35.65000, 35.65000, 5),
      locationY: getRandomNumber(35.65000, 139.80000, 5),
    },

    randomAdd: {
      title: getArrayRandElement(TITLE),
      address: this.locationX + this.locationY,
      price: getRandomNumber(10, 1000),
      type: getArrayRandElement(OFFER_TYPES),
      rooms: getRandomNumber(1,5),
      guests: getRandomNumber(1,10),
      checkin: getArrayRandElement(CHECKINS),
      checkout: getArrayRandElement(CHECKOUTS),
      features: getArrayRandElement(FEATURES),
      description: getArrayRandElement(DESCRIPTIONS),
      photos: getArrayRandElement(PHOTOS),
    },
  };
};

const propertyAdd = new Array(SIMILAR_OBJECT_COUNT).fill(null).map(() => createAdds());

propertyAdd;
