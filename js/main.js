function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(0, 100);

function getRandomNumber(min, max, floatNumber) {
  let float = ((Math.random() * (max - min + 1)) + min);
  let floatFixed = +float.toFixed(floatNumber);

  return floatFixed;
}

getRandomNumber(1.2, 1.3, 5);
