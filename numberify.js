'use strict';

function numberify(option, number) {
  if (number < 100) {
    if (number < 10) {
      number = '00' + number;
    } else {
      number = '0' + number;
    }
  }
  return number;

  if (option == 'tech') {
    number += 500;
    if (number > 1000) {
      number -= 1000;
    }
    return number;
  } else if (option == 'admin') {
    number += 100;
  } if (number > 1000) {
    number -= 1000;
  }
  return number;
}

module.exports = numberify;
