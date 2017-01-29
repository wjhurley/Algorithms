function convert() {
  var intDecimal = document.getElementById("decimalNum").value;
  var lblRomanNum = document.getElementById("romanNum");
  lblRomanNum.innerHTML = convertToRoman(intDecimal);
}
