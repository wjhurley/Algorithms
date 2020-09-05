'use strict';

var convertButton = document.querySelector('#convert-to-roman');
convertButton.addEventListener('click', function convert() {
    var decimalNum = Number(document.querySelector('#decimalNum').value);
    var lblRomanNum = document.querySelector('#romanNum');
    lblRomanNum.innerHTML = convertToRoman(decimalNum);
}, true);
