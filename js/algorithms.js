/*NOT A CHALLENGE ON FCC - Fibonacci sequence that starts with 0 as the first number in the sequence (i.e. 0,1,1...)*/
function fibonacci(n) {
  var intA = 0, intB = 1, intFib = 1;
  if(n == 0) {
    return intA;
  } else if(n == 1) {
    return intB;
  } else {
    for(var i = 2; i <= n; i++) {
      intFib = intA + intB;
      intA = intB;
      intB = intFib;
    }
  }
  return intFib;
}
/*RECORD COLLECTION - Given a music album collection as a JSON object, the function will take a record (id), property (prop), and value as arguments, update the specified record and return the updated collection. If an empty string is provided as the value, the property will be deleted instead.*/

// Example album collection
var collection = {
    "2548": {
      "album": "The Chronic",
      "artist": "Dr. Dre",
      "tracks": [
        "Nuthin' But A G Thang",
        "Let Me Ride"
      ]
    },
    "2468": {
      "album": "Doggystyle",
      "artist": "Snoop Dogg",
      "tracks": [
        "What's My Name",
        "Ain't No Fun"
      ]
    },
    "1245": {
      "artist": "Nirvana",
      "tracks": [ ]
    },
    "5439": {
      "album": "Hybrid Theory"
    }
};

function updateRecords(id, prop, value) {
  if(value === "") {
    delete collection[id][prop];
  } else if(!collection[id][prop] && prop === "tracks") {
    collection[id][prop] = [value];
  } else if(prop === "tracks") {
    collection[id][prop].push(value);
  } else if(collection[id][prop] !== "tracks") {
    collection[id][prop] = value;
  }
  return collection;
}
/*PROFILE LOOKUP - Given an array of objects (contacts), determine if the contact (firstName) exists and if so, determine if the property (prop) exists. If either does not exist, return "No such ..."*/

//Example contact list
var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "4255550123",
        "likes": ["Pizza", "Coding", "Brownies"]
    },
    {
        "firstName": "Jennifer",
        "lastName": "Smith",
        "number": "2062224567",
        "likes": ["Harry Potter", "Drawing", "Reading"]
    },
    {
        "firstName": "James",
        "lastName": "Bond",
        "number": "4255005000",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Jeff",
        "lastName": "Malone",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Node.js"]
    }
];

function lookUpProfile(firstName, prop){
  for(var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName != firstName) {
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
/*REVERSE A STRING - Reverses provided string*/
function reverseString(str) {
  var arrStr = str.split("");
  var strRev = arrStr.reverse().join("");
  return strRev;
}
/*FACTORIALIZE A NUMBER - Returns factorial of integer provided*/
function factorialize(num) {
  var intTotal = 1;
  for(var i = 1; i <= num; i++) {
    intTotal *= i;
  }
  return intTotal;
}
/*CHECK FOR PALINDROMES - Checks to see if the provided string is a palindrome, regardless of special characters and case*/
function palindrome(str) {
  var regNonChar = /\W+/g;
  var strNew = str.replace(regNonChar, "").toLowerCase();
  strNew = strNew.replace("_", "");
  var strRev = strNew.split("").reverse().join("");
  if(strNew === strRev) {
    return true;
  } else {
    return false;
  }
}
/*FIND THE LONGEST WORD IN A STRING - When provided a string of words, this function will return the length of the longest word*/
function findLongestWord(str) {
  var arrStr = str.split(" ");
  var arrStrLength = [];
  for(var i = 0; i < arrStr.length; i++) {
    arrStrLength[i] = arrStr[i].length;
  }
  arrStrLength.sort(function(a, b){return b-a;});
  return arrStrLength[0];
}
/*TITLE CASE A SENTENCE - When provided a string of words, regardless of capitalization, will return the same string with only the first character in each word capitalized.*/
function titleCase(str) {
  var arrStr = str.toLowerCase().split(" ");
  var arrWord = [];
  var arrNewWord = [];
  for(var i = 0; i < arrStr.length; i++) {
    arrWord[i] = arrStr[i].split("");
    for(var j = 0; j < 1; j++) {
      arrWord[i][j] = arrWord[i][j].toUpperCase();
      arrNewWord[i] = arrWord[i].join("");
    }
  }
  arrStr = arrNewWord.join(" ");
  return arrStr;
}
/*RETURN LARGEST NUMBERS IN ARRAYS - Given a set of numerical arrays, returns the highest value from each array in an array*/
function largestOfFour(arr) {
  var arrInner = [];
  var arrSorted = [];
  var arrHighest = [];
  for(var i = 0; i < arr.length; i++) {
    arrInner[i] = arr[i];
    arrSorted[i] = arrInner[i].sort(function(a, b){return b-a;});
  }
  for(var i = 0; i < arrSorted.length; i++) {
    arrHighest[i] = arrSorted[i][0];
  }
  return arrHighest;
}
/*CONFIRM THE ENDING - Given 2 string arguments, checks whether argument 1 ends with argument 2*/
function confirmEnding(str, target) {
  if(str.substr((str.length - target.length)) == target) {
    return true;
  } else {
    return false;
  }
}
/*REPEAT A STRING REPEAT A STRING - Given 2 arguments, repeat argument 1 by number provided as argument 2*/
function repeatStringNumTimes(str, num) {
  var strRepeat = "";
  for(var i = 1; i <= num; i++) {
    strRepeat += str;
  }
  return strRepeat;
}
/*TRUNCATE A STRING - Given 2 arguments, first a string and second an integer, truncate the string to the given num length. Num less than or equal to 3, the ellipsis is not counted in length of string*/
function truncateString(str, num) {
  var intTruncate = num - 3;
  var strTruncate = "";
  if(num <= 3) {
    strTruncate = str.substr(0, num) + "...";
  } else if(num >= str.length) {
    strTruncate = str;
  } else {
    strTruncate = str.substr(0, intTruncate) + "...";
  }
  return strTruncate;
}
/*CHUNKY MONKEY - Given an array arr and integer size, return a 2 dimensional array composed of original array broken into groups determined by the size argument*/
function chunkArrayInGroups(arr, size) {
  var arrGroups = [];
  for(var i = 0; i < arr.length; i += size) {
    arrGroups.push(arr.slice(i, (i + size)));
  }
  return arrGroups;
}
/*SLASHER FLICK - Given an array and an integer howMany, return the remaining elements after removing howMany elements*/
function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}
/*MUTATIONS - Checks to see if the string in first element of array contains all of the letters of the string in second element*/
function mutation(arr) {
  var arrSecondWord = arr[1].toLowerCase().split("");
  var strFirstWord = arr[0].toLowerCase();
  for(var i = 0; i < arrSecondWord.length; i++) {
    if(strFirstWord.indexOf(arrSecondWord[i]) == -1) {
      return false;
    } else {
      continue;
    }
  }
  return true;
}
/*FALSY BOUNCER - Checks for falsy values in an array and removes them*/
function bouncer(arr) {
  var arrNew = [];
  function checkFalsy(arg) {
    if(!arg) {
      return false;
    } else {
      return true;
    }
  }
  arrNew = arr.filter(checkFalsy);
  return arrNew;
}
/*SEEK AND DESTROY - Given an array and one or more additional arguments, function will return a new array with only the elements of the array that do not match the additional arguments*/
function destroyer(arr) {
  var arrOriginal = [];
  arrOriginal = arguments[0];
  var arrDestroyer = [];
  for(var i = 1; i < arguments.length; i++) {
    arrDestroyer[i - 1] = arguments[i];
  }
  function filterArray(arg) {
    if(arrDestroyer.indexOf(arg) < 0) {
      return true;
    } else {
      return false;
    }
  }
  var arrNew = [];
  arrNew = arrOriginal.filter(filterArray);
  return arrNew;
}
/*WHERE DO I BELONG - Given an array and a separate numerical argument, the function will sort the array and decide the index where the numerical argument would belong in the array*/
function getIndexToIns(arr, num) {
  var intInsert = num;
  var intIndex = -1;
  var arrSorted = arr.sort(function(a, b) {return a - b;});
  do {
    intIndex++;
  } while(intInsert > arrSorted[intIndex]);
  return intIndex;
}
/*CAESARS CIPHER - Function used to decipher ROT13 Caesar Cipher*/
function rot13(str) {
  var arrStr = str.split("");
  var arrChar = [];
  var arrDecode = [];
  for(var i = 0; i < arrStr.length; i++) {
    arrChar[i] = arrStr[i].replace(/\w/, arrStr[i].charCodeAt(0));
    switch(true) {
      case arrChar[i] >= 65 && arrChar[i] <= 77:
      case arrChar[i] >= 97 && arrChar[i] <= 109:
        arrDecode[i] = String.fromCharCode(parseInt(arrChar[i]) + 13);
        break;
      case arrChar[i] >= 78 && arrChar[i] <= 90:
      case arrChar[i] >= 110 && arrChar[i] <= 122:
        arrDecode[i] = String.fromCharCode(arrChar[i] - 13);
        break;
      default:
        arrDecode[i] = arrChar[i];
    }
  }
  return arrDecode.join("");
}
/*SUM ALL NUMBERS IN A RANGE - Given an array of two integers, returns the total sum of all integers between including the two integers*/
function sumAll(arr) {
  var intTotal = 0;
  function reducer(arr1, arr2) {
    for(var i = arr1; i <= arr2; i++) {
      intTotal += i;
    }
    return intTotal;
  }
  var intMin = Math.min(arr[0], arr[1]);
  if(intMin == arr[0]) {
    return arr.reduce(reducer);
  } else {
    return arr.reduce(reducer, arr[1]);
  }
}
/*DIFF TWO ARRAYS - Given two arrays, returns an array consisting of elements not existing in both arrays*/
function diffArray(arr1, arr2) {
  var arrNew = [];
  function filterArray(arg) {
    if(this.indexOf(arg) < 0) {
      return true;
    } else {
      return false;
    }
  }
  arrNew = arr2.filter(filterArray, arr1);
  arrNew = arrNew.concat(arr1.filter(filterArray, arr2));
  return arrNew;
}
/*ROMAN NUMERAL CONVERTER - Function returns the Roman Numeral for the argument provided*/
function convertToRoman(num) {
  var arrNum = String(num).split('').reverse();
  var arrRoman = ['I', 'V', 'X', 'L', 'C', 'D', 'M', '', ''];
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
        for(var j = 0; j < parseInt(arg[0]); j++) {
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
        for(var k = 0; k < (parseInt(arg[0]) - 5); k++) {
          strTempRoman += arg[1];
        }
        break;
      case 9:
        strTempRoman = arg[1] + arg[3];
        break;
    }
    return arrRomanNum.push(strTempRoman);
  }
  for(var i = 0; i < arrNum.length; i++) {
    arrTemp[0] = arrNum[i];
    arrTemp[1] = arrRoman[(i * 2)];
    arrTemp[2] = arrRoman[(i * 2 + 1)];
    arrTemp[3] = arrRoman[(i * 2 + 2)];
    convertRoman(arrTemp);
  }
  return arrRomanNum.reverse().join('').trimRight();
}
/*WHEREFORE ART THOU - Given an array of objects (1st argument), function will return all objects that have matching property and value pairs as 2nd argument*/
function whatIsInAName(collection, source) {
  var arr = [];
  var arrExists = [];
  var arrSource = Object.keys(source);
  for(var j = 0; j < collection.length; j++) {
    var intCounter = 0;
    for(var name in collection[j]) {
      if(source.hasOwnProperty(name) && source[name] == collection[j][name]) {
        intCounter++;
      }
    }
    if(intCounter == arrSource.length) {
      arrExists.push(collection[j]);
    }
  }
  return arrExists;
}
/*SEARCH AND REPLACE - Given three arguments, the function will find a word (before) in a string (str) and replace it with a new word (after) preserving the case of the original word*/
function myReplace(str, before, after) {
  var arrStr = str.split(" ");
  var regReplace = /[A-Z]/;
  var strNew = "";
  var strAfter = "";
  if(regReplace.test(before)) {
    strAfter = after.charAt(0).toUpperCase();
    strAfter += after.slice(1);
    arrStr.splice(arrStr.indexOf(before), 1, strAfter);
    strNew = arrStr.join(' ');
  } else {
    arrStr.splice(arrStr.indexOf(before), 1, after);
    strNew = arrStr.join(' ');
  }
  return strNew;
}
/*PIG LATIN - Given a string (single word), returns the pig latin version*/
function translatePigLatin(str) {
  var regVowel = /[aeiou]/;
  var strPigLatin = "";
  var arrStr = [];
  var intVowel = str.toLowerCase().search(regVowel);
  if(intVowel < 1) {
    arrStr = str.split();
    arrStr.push("way");
    strPigLatin = arrStr.join("");
  } else {
    arrStr = str.split(str.charAt(intVowel), 1);
    arrStr.push(str.substr(intVowel));
    arrStr.reverse().push("ay");
    strPigLatin = arrStr.join("");
  }
  return strPigLatin;
}
/*DNA PAIRING - Given a DNA strand, returns an array including the pairing element (i.e. A(1st strand):T(pairing element), T:A, C:G, G:C)*/
function pairElement(str) {
  var arrStr = str.split("");
  var arrDNA = [];
  for(var index in arrStr) {
    arrDNA.push([]);
    arrDNA[index].push(arrStr[index]);
  }
  for(var i = 0; i < arrStr.length; i++) {
    switch(arrStr[i]) {
      case "A":
        arrDNA[i].push("T");
        break;
      case "T":
        arrDNA[i].push("A");
        break;
      case "C":
        arrDNA[i].push("G");
        break;
      case "G":
        arrDNA[i].push("C");
        break;
    }
  }
  return arrDNA;
}
/*MISSING LETTERS - Finds the missing letter in a string of consecutive characters. If there is no missing letter, returns undefined.*/
function fearNotLetter(str) {
  var intStart = str.charCodeAt(0);
  var i = 1;
  while(intStart + i === str.charCodeAt(i)) {
    i++;
  }
  if(str.charCodeAt(i)) {
    return String.fromCharCode(intStart + i);
  } else {
    return undefined;
  }
}
/*BOO WHO - Checks if input provided is a boolean primitive (true or false)*/
function booWho(bool) {
  if(bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}
/*SORTED UNION - Given two or more arrays, returns a new array with unique values from the original arrays, in the order provided*/
function uniteUnique(arr) {
  var arrUnique = arguments[0];
  for(var i = 1; i < arguments.length; i++) {
    for(var j = 0; j < arguments[i].length; j++) {
      if(arrUnique.indexOf(arguments[i][j]) === -1) {
        arrUnique.push(arguments[i][j]);
      }
    }
  }
  return arrUnique;
}
/*CONVERT HTML ENTITIES - Given a string with &, <, >, ", or ', returns the same string with the special characters escaped*/
function convertHTML(str) {
  var strHTML = "";
  var regHTML = /[&<>"']/g;
  function escapingHTML(reg) {
    var arrReg = ["&", "<", ">", '"', "'"];
    var arrEsc = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
    var intReg = arrReg.indexOf(reg);
    var strReg = arrEsc[intReg];
    return strReg;
  }
  strHTML = str.replace(regHTML, escapingHTML);
  return strHTML;
}
/*SPINAL TAP CASE - Given a string, returns the string in spinal case (all lower case words joined by dashes)*/
function spinalCase(str) {
  var regSpace = /\s|[_]/g;
  var regDash = /\B[A-Z]/g;
  var strSpinal = "";
  function placeDashes(match) {
    return "-" + match.toLowerCase();
  }
  strSpinal = str.replace(regSpace, "-");
  strSpinal = strSpinal.replace(regDash, placeDashes);
  strSpinal = strSpinal.toLowerCase();
  return strSpinal;
}
/*SUM ALL ODD FIBONACCI NUMBERS - Given a positive number, return the sum of all odd numbers in the fibonacci sequence that are less than or equal to that number*/
function sumFibs(num) {
  var intA = 1;
  var intB = 1;
  var intMax = parseInt(num);
  var arrFib = [intA, intB];
  function fibonacciOdd(arg) {
    if(arg % 2 === 0) {
      return false;
    } else {
      return true;
    }
  }
  function addArray(previousValue, currentValue) {
    return previousValue + currentValue;
  }
  while(intMax >= intA) {
    intA += intB;
    intB += intA;
    if(intMax >= intB) {
      arrFib.push(intA, intB);
    } else if(intMax >= intA) {
      arrFib.push(intA);
    }
  }
  var arrOdd = arrFib.filter(fibonacciOdd);
  return arrOdd.reduce(addArray);
}
/*SUM ALL PRIMES - Given a positive number, adds all prime numbers up to and including the number (if that number is prime)*/
function sumPrimes(num) {
  var arrPrimes = [];
  var i = 1;
  function addPrimes(previousValue, currentValue) {
    return previousValue + currentValue;
  }
  while(i <= num) {
    var arrDivisors = [];
    for(var j = 1; j <= i; j++) {
      if(i % j === 0) {
        arrDivisors.push(j);
      }
    }
    if(arrDivisors.length === 2) {
      arrPrimes.push(i);
    }
    i++;
  }
  return arrPrimes.reduce(addPrimes);
}
/*SMALLEST COMMON MULTIPLE - Given two integers, finds the smallest common multiple that can be evenly divided by all numbers between the two integers, including those integers*/
function smallestCommons(arr) {
  var arrNum = [];
  arr.sort(function(a, b) {
    return b - a;
  });
  for(var i = arr[0]; i >= arr[1]; i--) {
    arrNum.push(i);
  }
  var loop = 1;
  var intPossibleMultiple = 0;
  var j = 0;
  do {
    intPossibleMultiple = arrNum[0] * loop * arrNum[1];
    for(j = 2; j < arrNum.length; j++) {
      if(intPossibleMultiple % arrNum[j] !== 0) {
        break;
      }
    }
    loop++;
  } while(j !== arrNum.length);
  return intPossibleMultiple;
}
/*FINDERS KEEPERS - Function takes an array and a function as arguments and returns the first element in the array that passes the test in the function*/
function findElement(arr, func) {
  var arrPassing = arr.filter(func);
  return arrPassing[0];
}
/*DROP IT - Function takes an array and a function as arguments and returns a new array of the same elements starting from the first element to pass the test in the function*/
function dropElements(arr, func) {
  var arrTrue = arr.filter(func);
  var arrReduced = [];
  if(arrTrue[0]) {
    arrReduced = arr.slice(arr.indexOf(arrTrue[0]));
  }
  return arrReduced;
}
/*STEAMROLLER - Function takes a nested array and flattens it to a single array with all values*/
function steamrollArray(arr) {
  var arrNew = [];
  function findArray(arg) {
    if(Array.isArray(arg)) {
      arg.forEach(findArray);
    } else {
      return arrNew.push(arg);
    }
  }
  arr.forEach(findArray);
  return arrNew;
}
/*BINARY AGENTS - Function takes a string of space-separated binary numbers and converts it into an English sentence*/
function binaryAgent(str) {
  var arrStr = str.split(" ");
  var arrBinary = [];
  function convertBinary(arg) {
    var intTotal = 0;
    for(var i = 7; i >= 0; i--) {
      if(arg.charAt(i) == "1") {
        intTotal += Math.pow(2, 7 - i);
      }
    }
    arrBinary.push(intTotal);
  }
  arrStr.forEach(convertBinary);
  var arrTranslated = arrBinary.map(function(currentValue) {
    return String.fromCharCode(currentValue);
  });
  return arrTranslated.join("");
}
/*EVERYTHING BE TRUE - Function checks if an array of objects (collection) has a property (pre) and if that property has a truthy value*/
function truthCheck(collection, pre) {
  function propertyExists(arg) {
    if(arg[pre]) {
      return true;
    } else {
      return false;
    }
  }
  var arrTruth = collection.filter(propertyExists);
  return arrTruth.length === collection.length;
}
/*ARGUMENTS OPTIONAL - Function sums two valid number arguments, but if only one argument provided, returns a function that expects one valid number argument and then returns the sum*/
function addTogether() {
  var x = arguments[0];
  if(typeof x === "number") {
    if(arguments[1] && typeof arguments[1] === "number") {
      return x + arguments[1];
    } else if(!arguments[1]) {
      return function(y) {
        if(typeof y === "number") {
          return x + y;
        }
      };
    } else if(typeof arguments[1] !== "number") {
      return undefined;
    }
  } else {
    return undefined;
  }
}
/*VALIDATE US TELEPHONE NUMBERS - Function checks for a valid 10 digit telephone number in different formats including spaces, dashes, parentheses, and with or without a country code (must be 1)*/
function telephoneCheck(str) {
  var regTel = [
    /^\d{3}[\s-]\d{3}[\s-]\d{4}/,
    /^\d{10}$/,
    /^1\s\d{3}[\s-]\d{3}[\s-]\d{4}/,
    /^1?\s?[(]\d{3}[)]\s?\d{3}[-]\d{4}/
  ];
  function testRegex(regex) {
    return regex.test(str);
  }
  var arrReg = regTel.filter(testRegex);
  return arrReg.length > 0 ? true : false;
}
/*SYMMETRIC DIFFERENCE - Given two or more arrays, function returns a single array with the symmetric difference of the provided arrays*/
function sym(args) {
  var arrArgs = Array.from(arguments);
  var arrUniqueArgs = [];
  var arrSymDiffOne = [];
  var arrSymDiffTwo = [];
  function findUnique(arg) {
    if(this.indexOf(arg) >= 0) {
      return false;
    } else {
      return true;
    }
  }
  function makeUnique(arg) {
    if(this.indexOf(arg) < 0) {
      this.push(arg);
    }
  }
  for(var j = 0; j < arrArgs.length; j++) {
    arrUniqueArgs[j] = [];
    arrArgs[j].forEach(makeUnique, arrUniqueArgs[j]);
  }
  arrSymDiffOne = arrUniqueArgs[0];
  for(var i = 1; i < arrUniqueArgs.length; i++) {
    arrSymDiffTwo = arrSymDiffOne;
    arrSymDiffOne = arrSymDiffOne.filter(findUnique, arrUniqueArgs[i]);
    arrSymDiffOne = arrSymDiffOne.concat(arrUniqueArgs[i].filter(findUnique, arrSymDiffTwo));
  }
  return arrSymDiffOne;
}
/*EXACT CHANGE - Given an amount owed, cash provided, and cash in the register, return the change owed in each denomination*/
function checkCashRegister(price, cash, cid) {
  var denominations = [
    {name: "ONE HUNDRED", val: 100.00},
    {name: "TWENTY", val: 20.00},
    {name: "TEN", val: 10.00},
    {name: "FIVE", val: 5.00},
    {name: "ONE", val: 1.00},
    {name: "QUARTER", val: 0.25},
    {name: "DIME", val: 0.10},
    {name: "NICKEL", val: 0.05},
    {name: "PENNY", val: 0.01}
  ];
  var change = cash - price;
  var register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});
  register.total = Number(register.total.toFixed(2));
  if(register.total === change) {
    return "Closed";
  } else if(register.total < change) {
    return "Insufficient Funds";
  }
  var arrChange = denominations.reduce(function(acc, curr) {
    var value = 0;
    while(register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;
      console.log(change);
      change = Math.round(change * 100) / 100;
    }
    if(value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);
  if(arrChange.length < 1 || change > 0) {
    return "Insufficient Funds";
  }
  return arrChange;
}
