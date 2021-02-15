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
