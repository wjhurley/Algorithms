function convert() {
  intDecimal = document.getElementById("decimalNum").value;
  lblRomanNum = document.getElementById("romanNum");
  lblRomanNum.innerHTML = convertToRoman(intDecimal);
}
