'use strict';

const removeDuplicateWords = (str) => {
  const singleWords = [];
  return str.split(' ').filter((el) => {
    if (singleWords.indexOf(el) > -1) {
      return false;
    }

    return singleWords.push(el);
  }).join(' ');
};
