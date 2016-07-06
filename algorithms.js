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
