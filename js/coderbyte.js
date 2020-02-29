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
