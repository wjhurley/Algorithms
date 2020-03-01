// Given an array of two strings made up of comma-separated numbers in ascending
// order, return a comma-separated string of the numbers that exist in both strings.
function FindIntersection(strArr) { 
  const intersections = [];
  strArr[0].split(', ').foreach(num => {
    strArr[1].split(', ').foreach(num2 => {
      if (num === num2) {
        intersections.push(num2);
      }
    });
  });

  return intersections.length ? intersections.join(',') : false; 
}
// Given a string of characters including numbers, letters, and question marks,
// determine if exactly 3 question marks exist between each number (regardless
// of letters in between) AND the two numbers must equal 10. Numbers are reused
// to form pairs, i.e. '6???4???6???4' has 3 pairs: 6 + 4, 4 + 6, and 6 + 4.
function QuestionsMarks(str) {
  const numbers = [];
  let flag = false;

  str.split('').forEach((curr, index) => {
    if (/\d/.test(curr)) {
      numbers.push(index);
    }
  });

  for (let i = 0; i < numbers.length - 1; i++) {
    if (Number(str[numbers[i]]) + Number(str[numbers[i + 1]]) === 10) {
      flag = true;
      const chunk = str.slice(numbers[i], numbers[i + 1]).replace(/[^\?]/g, '');

      if (chunk !== '???') {
        return false;
      }
    }
  }

  return flag;
}
// Given a string of only alpha characters, return a string with those characters
// sorted in alphabetical order.
function AlphabetSoup(str) { 
  return str.split('')
    .sort((a, b) => {
      return a.localeCompare(b);
    })
    .join(''); 
}
// Given a postive integer, return the factorial (the product of the integer and
// all integers below it).
function FirstFactorial(num) { 
  let total = 1;

  for (let i = 1; i <= num; i++) {
    total *= i;
  }

  return total;
}
// Given a string, return the string in reversed order
function FirstReverse(str) { 
  return str.split('').reverse().join('');
}
// Given a string, replace every letter with the next letter in the alphabet,
// regardless of casing ('z' becomes 'a'). Then return the new string with
// every vowel capitalized (capital vowels remain the same).
function LetterChanges(str) {
  // Create constants needed for shifting 'z' to 'a'
  const aUpperCharCode = 65;
  const zUpperCharCode = 90;
  const aLowerCharCode = 97;
  const zLowerCharCode = 122;

  return str.split('')
    .map(char => {
      const charCode = char.charCodeAt();
      let tempChar = '';

      if ( (charCode < aUpperCharCode || charCode > zUpperCharCode)
        && (charCode < aLowerCharCode || charCode > zLowerCharCode)
      ) {
        tempChar = char;
      } else if (charCode === zUpperCharCode) {
        tempChar = String.fromCharCode(aUpperCharCode);
      } else if (charCode ===zLowerCharCode) {
        tempChar = String.fromCharCode(aLowerCharCode);
      } else {
        tempChar = String.fromCharCode(charCode + 1);
      }

      return tempChar;
    })
    .join('')
    .replace(/[aeiou]/g, match => match.toUpperCase());
}
// Given a string, return the longest word. If there are two or more words with
// the same length, return the first word from the string with that length.
function LongestWord(sen) {
  const regex = /[^a-z0-9]/gi;
  const sortedArray = sen.split(' ')
    .sort((a, b) => {
      const strippedA = a.replace(regex, '');
      const strippedB = b.replace(regex, '');
      if (strippedA.length === strippedB.length) {
        return -1;
      }

      return strippedB.length - strippedA.length;
    });

  return sortedArray[0];
}
