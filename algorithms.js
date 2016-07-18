/*Fibonacci sequence that starts with 0 as the first number in the sequence (i.e. 0,1,1...)*/
function fibonacci(n) {
  var intA = 0, intB = 1, intFib = 1;
  if(n==0) {return intA;}
  else if(n==1) {return intB;}
  else {
    for(i=2;i<=n;i++) {
      intFib = intA + intB;
      intA = intB;
      intB = intFib;
    }
  }
  return intFib;
}
/*When provided a string of words, regardless of capitalization, will return the same string with only the first character in each word capitalized.*/
function titleCase(str) {
  var arrStr = str.toLowerCase().split(" ");
  var arrWord = [];
  var arrNewWord = [];
  for (i = 0; i < arrStr.length; i++) {
    arrWord[i] = arrStr[i].split("");
    for (j = 0; j < 1; j++) {
      arrWord[i][j] = arrWord[i][j].toUpperCase();
      arrNewWord[i] = arrWord[i].join("");
    }
  }
  arrStr = arrNewWord.join(" ");
  return arrStr;
}
/*When provided a string of words, this function will return the length of the longest word*/
function findLongestWord(str) {
  var arrStr = str.split(" ");
  var arrStrLength = [];
  for (i=0; i<arrStr.length; i++) {
    arrStrLength[i] = arrStr[i].length;
  }
  arrStrLength.sort(function(a,b){return b-a;});
  return arrStrLength[0];
}
/*Checks to see if the provided string is a palindrome, regardless of special characters and case*/
function palindrome(str) {
  var regNonChar = /\W+/g;
  var strNew = str.replace(regNonChar, "").toLowerCase();
  strNew = strNew.replace("_","");
  var strRev = strNew.split("").reverse().join("");
  if (strNew === strRev) {
    return true;
  } else {
    return false;
  }
}
/*given a number, returns the factorial (i.e. 5 returns 1*2*3*4*5)*/
function factorialize(num) {
  var total = 1;
  for (i=1;i<=num;i++) {
    total *= i;
  }
  return total;
}
/*given a set of numerical arrays, returns the highest value from each array in an array*/
function largestOfFour(arr) {
  var arrInner = [];
  var arrSorted = [];
  var arrHighest = [];
  for (i=0;i<arr.length;i++) {
    arrInner[i] = arr[i];
    arrSorted[i] = arrInner[i].sort(function(a,b){return b-a;});
  }
  for (i=0;i<arrSorted.length;i++) {
    arrHighest[i] = arrSorted[i][0];
  }
  return arrHighest;
}
/*given 2 string arguments, checks whether argument 1 ends with argument 2*/
function confirmEnding(str, target) {
  if (str.substr((str.length-target.length)) == target) {
    return true;
  } else {
    return false;
  }
}
/*Given 2 arguments, repeat argument 1 by number provided as argument 2*/
function repeatStringNumTimes(str, num) {
  var strRepeat = "";
  for (i=1;i<=num;i++) {
    strRepeat += str;
  }
  return strRepeat;
}
/*Given 2 arguments, first a string and second an integer, truncate the string to the given num length. Num less than or equal to 3, the ellipsis is not counted in length of string*/
function truncateString(str, num) {
  var intTruncate = num - 3;
  var strTruncate = "";
  if (num <= 3) {
    strTruncate = str.substr(0, num) + "...";
  } else if (num >= str.length) {
    strTruncate = str;
  } else {
    strTruncate = str.substr(0, intTruncate) + "...";
  }
  return strTruncate;
}
/*Given an array arr and integer size, return a 2 dimensional array composed of original array broken into groups determined by the size argument*/
function chunkArrayInGroups(arr, size) {
  var arrGroups = [];
  for (i = 0; i < arr.length; i+=size) {
    arrGroups.push(arr.slice(i,(i+size)));
  }
  return arrGroups;
}
/*Given an array of objects (contacts), determine if the contact (firstName) exists and if so, determine if the property (prop) exists. If either does not exist, return "No such ..."*/
function lookUpProfile(firstName, prop){
  for (i=0; i<contacts.length; i++) {
    if (contacts[i].firstName != firstName) {
      continue;
    } else {
      if (contacts[i][prop]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
/*Given an array and an integer howMany, return the remaining elements after removing howMany elements*/
function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}
/*Checks to see if the string in first element of array contains all of the letters of the string in second element*/
function mutation(arr) {
  var arrSecondWord = arr[1].toLowerCase().split("");
  var strFirstWord = arr[0].toLowerCase();
  for (i=0; i<arrSecondWord.length; i++) {
    if (strFirstWord.indexOf(arrSecondWord[i]) == -1) {
      return false;
    } else {
      continue;
    }
  }
  return true;
}
/*Checks for falsy values in an array and removes them*/
function bouncer(arr) {
  function checkFalsy(arg) {
    if (!arg) {
      return false;
    } else {
      return true;
    }
  }
  var arrNew = [];
  arrNew = arr.filter(checkFalsy);
  return arrNew;
}
/*Given an array and one or more additional arguments, function will return a new array with only the elements of the array that do not match the additional arguments*/
function destroyer(arr) {
  var arrOriginal = [];
  arrOriginal = arguments[0];
  var arrDestroyer = [];
  for (i=1; i<arguments.length; i++) {
    arrDestroyer[i-1] = arguments[i];
  }
  function filterArray(arg) {
    if (arrDestroyer.indexOf(arg) < 0) {
      return true;
    } else {
      return false;
    }
  }
  var arrNew = [];
  arrNew = arrOriginal.filter(filterArray);
  return arrNew;
}
/*Given an array and a separate numerical argument, the function will sort the array and decide the index where the numerical argument would belong in the array*/
function getIndexToIns(arr, num) {
  var intInsert = num;
  var intIndex = -1;
  var arrSorted = arr.sort(function(a,b) {return a - b;});
  do {
    intIndex++;
  } while (intInsert > arrSorted[intIndex]);
  return intIndex;
}
/*Function used to decipher ROT13 Caesar Cipher*/
function rot13(str) {
  var arrStr = str.split("");
  var arrChar = [];
  var arrDecode = [];
  for (i=0; i<arrStr.length; i++) {
    arrChar[i] = arrStr[i].replace(/\w/, arrStr[i].charCodeAt(0));
    if (arrChar[i] >= 65 && arrChar[i] <= 77) {
      arrChar[i] = parseInt(arrChar[i]) + 13;
      arrDecode[i] = String.fromCharCode(arrChar[i]);
    } else if (arrChar[i] >= 78 && arrChar[i] <= 90) {
      arrChar[i] -= 13;
      arrDecode[i] = String.fromCharCode(arrChar[i]);
    } else if (arrChar[i] >= 97 && arrChar[i] <= 109) {
      arrChar[i] = parseInt(arrChar[i]) + 13;
      arrDecode[i] = String.fromCharCode(arrChar[i]);
    } else if (arrChar[i] >= 110 && arrChar[i] <= 122) {
      arrChar[i] -= 13;
      arrDecode[i] = String.fromCharCode(arrChar[i]);
    } else {
      arrDecode[i] = arrChar[i];
    }
  }
  return arrDecode.join("");
}
/*Given an array of two integers, returns the total sum of all integers between including the two integers*/
function sumAll(arr) {
  var intTotal = 0;
  function reducer(arr1, arr2) {
    for(i=arr1; i<=arr2; i++) {
      intTotal += i;
    }
    return intTotal;
  }
  var intMin = Math.min(arr[0], arr[1]);
  if (intMin == arr[0]) {
    return arr.reduce(reducer);
  } else {
    return arr.reduce(reducer, arr[1]);
  }
}
/*Given two arrays, returns an array consisting of elements not existing in both arrays*/
function diffArray(arr1, arr2) {
  var arrNew = [];
  function filterArray(arg) {
    if (this.indexOf(arg) < 0) {
      return true;
    } else {
      return false;
    }
  }
  arrNew = arr2.filter(filterArray, arr1);
  arrNew = arrNew.concat(arr1.filter(filterArray, arr2));
  return arrNew;
}
/*Function returns the Roman Numeral for the argument provided*/
function convertToRoman(num) {
  var arrNum = String(num).split('').reverse();
  var arrRoman = ['I','V','X','L','C','D','M','',''];
  var arrRomanNum = [];
  var arrTemp = [];
  function convertRoman(arg) {
    var strTempRoman = "";
    switch(parseInt(arg[0])) {
      case 0:
        break;
      case 1:
      case 2:
      case 3:
        for(j=0; j<parseInt(arg[0]); j++) {
          strTempRoman += arg[1];
        }
        break;
      case 4:
        strTempRoman = arg[1] + arg[2];
        break;
      case 5:
        strTempRoman = arg[2];
        break;
      case 6:
      case 7:
      case 8:
        strTempRoman = arg[2];
        for(k=0; k<(parseInt(arg[0]) - 5); k++) {
          strTempRoman += arg[1];
        }
        break;
      case 9:
        strTempRoman = arg[1] + arg[3];
        break;
    }
    return arrRomanNum.push(strTempRoman);
  }
  for(i=0; i<arrNum.length; i++) {
    arrTemp[0] = arrNum[i];
    arrTemp[1] = arrRoman[(i*2)];
    arrTemp[2] = arrRoman[(i*2+1)];
    arrTemp[3] = arrRoman[(i*2+2)];
    convertRoman(arrTemp);
  }
  return arrRomanNum.reverse().join('').trimRight();
}
