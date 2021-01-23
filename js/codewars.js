'use strict';

/**
 * Helper function for scanner()
 *
 * @param {number} num - The number to potentially be flipped
 * @param {number} x - The x coordinate where `num` is located in the QR code
 * @param {number} y - The y coordinate where `num` is located in the QR code
 * @returns {number} `num`, either flipped or left as-is (0 or 1)
 */
function bitMask(num, x, y) {
    return (x + y) % 2 === 0
        ? num === 1
            ? 0
            : 1
        : num;
}
/**
 * https://www.codewars.com/kata/52dd673c80db65531e000488
 *
 * @param {number} year - The year to determine what day Black Friday falls on
 * @returns {number} The day of the month that Black Friday falls on for the given year
 */
function blackFriday(year) {
    const novemberFirst = new Date(`${year}-11-01`);
    const dayOfWeekOnFirst = novemberFirst.getDay();
    const thursday = 4;
    const threeWeeksOneDay = 22;
    let firstThursday;

    if (dayOfWeekOnFirst <= thursday) {
        firstThursday = thursday - dayOfWeekOnFirst + 1;
    } else {
        firstThursday = 12 - dayOfWeekOnFirst;
    }

    return firstThursday + threeWeeksOneDay;
}
/**
 * https://www.codewars.com/kata/5235c913397cbf2508000048
 *
 * @param {string} str - The equation to evaluate
 * @returns {number} The result of evaluating the equation
 */
function calculator(str) {
    const characters = str
        .split(/\s+/)
        .map(val => Number.isNaN(Number(val)) ? val : Number(val));
    const allOperators = [
        ['*', '/'],
        ['+', '-'],
    ];

    for (const operators of allOperators) {
        for (const [i, character] of characters.entries()) {
            let result = 0;

            if (!operators.includes(character)) {
                continue;
            }

            switch (character) {
                case '*':
                    result = characters[i - 1] * characters[i + 1];
                    characters.splice(i - 1, 3, result);
                    break;
                case '/':
                    result = characters[i - 1] / characters[i + 1];
                    characters.splice(i - 1, 3, result);
                    break;
                case '+':
                    result = characters[i - 1] + characters[i + 1];
                    characters.splice(i - 1, 3, result);
                    break;
                case '-':
                    result = characters[i - 1] - characters[i + 1];
                    characters.splice(i - 1, 3, result);
                    break;
            }

            if (characters.length > 1) {
                return calculator(characters.join(' '));
            }
        }
    }

    if (characters.length > 1) {
        return calculator(characters.join(' '));
    }

    return characters[0];
}
/**
 * https://www.codewars.com/kata/54b724efac3d5402db00065e
 *
 * @param {string} morseCode - The morse code to decode
 * @returns {string} The decoded message
 */
function decodeMorse(morseCode) {
    const wordArray = morseCode.trim().split('   ');
    return wordArray
        .map(word => {
            return word
                .split(' ')
                .reduce((wrd, char) => {
                    return wrd + MORSE_CODE[char];
                }, '');
        })
        .join(' ');
}
/**
 * Helper function for findPosition()
 *
 * @param {number} num - The number to find the index of in the infinite string
 * @returns {number} The index where `num` would be found in the infinite string
 */
function findIndexForNumber(num) {
    const length = num.toString().length;
    const firstNumberOfSameLength = 10 ** (length - 1);
    const indexForFirstNumberOfSameLength = firstIndexForFactorOf10(length);
    const distanceFromFirstNumberOfSameLength = (num - firstNumberOfSameLength) * length;

    return indexForFirstNumberOfSameLength + distanceFromFirstNumberOfSameLength;
}
/**
 * Helper function for findPosition()
 *
 * @param {string} num - The numeric string to check for
 * @param {string} permutation - The numeric string used to create the string that will be checked for the existence of `num`
 * @returns {number} The index at which `num` can be found in the created string
 */
function findIndexInCyclicPermutation(num, permutation) {
    const testString = `${Number(permutation) - 1}${Number(permutation)}${Number(permutation) + 1}`;
    return testString.indexOf(num);
}
/**
 * https://www.codewars.com/kata/582c1092306063791c000c00
 *
 * @param {string} num - The section of the infinite string to find.
 * @returns {number} The starting index in the infinite string for the section passed in as a parameter.
 */
function findPosition(num) {
    const generator = generateInfiniteString(1);
    let [infiniteString, removed] = generator.next().value;

    if (infiniteString.indexOf(num) < 0 && num.length > 6) {
        return findPosition2(num);
    }

    while (infiniteString.indexOf(num) < 0) {
        [infiniteString, removed] = generator.next().value;
    }

    return infiniteString.indexOf(num) + removed;
}
/**
 * Helper function for findPosition()
 *
 * @param {string} num - The numeric string to find the position of in the infinite string
 * @returns {number} The index where the numeric string can be found in the infinite string
 */
function findPosition2(num) {
    const cyclicPermutations = getLowerCyclicPermutations(num);

    for (const permutation of cyclicPermutations) {
        const numBefore = (Number(permutation) - 1).toString();
        const index = findIndexInCyclicPermutation(num, permutation);

        if (index < 0) {
            continue;
        }

        return findIndexForNumber(Number(numBefore)) + index;
    }

    if (/^0+/.test(num)) {
        throw new Error('Number starts with 0 and we could not find a match in the cyclic permutations');
    }

    return findIndexForNumber(Number(num));
}
/**
 * Helper function for findPosition()
 *
 * @param {number} digitsLength - the number of digits to determine the starting index
 * @returns {number} The index for the first number of that length (factor of 10)
 */
function firstIndexForFactorOf10(digitsLength) {
    const base = 9;
    let total = 0;

    for (let i = 1; i < digitsLength; i++) {
        total += base * (i * 10 ** (i - 1));
    }

    return total;
}
/**
 * Helper function for findPosition()
 *
 * @param {number} num - The number to start the infinite string at.
 * @returns {Generator<[string, number]>} A section of the infinite string and the offset for the section.
 */
function * generateInfiniteString(num) {
    let start = num;
    let str = '';
    let offset = 0;
    let loopEnd = 35;
    let isFirstIteration = true;

    while (true) {
        for (let i = 0; i < loopEnd; i++) {
            str += '' + start;
            start++;
        }

        if (!isFirstIteration) {
            const leftovers = start.toString().length * (loopEnd + 5);
            const len = str.length - leftovers;
            offset += len;
            str = str.slice(-leftovers);
        }

        isFirstIteration = false;
        yield [str, offset];
    }
}
/**
 * Helper function for scanner()
 *
 * @param {number[]} param0 - The starting coordinates of the binary number
 * @returns {number[][]} The coordinates for all digits making up the binary number
 */
function getCoordinatesClockwise([startX, startY]) {
    const coordinates = [];

    for (let x = startX; x < startX + 2; x++) {
        for (let y = startY; y > startY - 2; y--) {
            coordinates.push([x, y]);
        }
    }

    for (let x = startX + 1; x > startX - 1; x--) {
        for (let y = startY - 2; y > startY - 4; y--) {
            coordinates.push([x, y]);
        }
    }

    return coordinates;
}
/**
 * Helper function for scanner()
 *
 * @param {number[]} param0 - The starting coordinates of the binary number
 * @returns {number[][]} The coordinates for all digits making up the binary number
 */
function getCoordinatesCounterClockwise([startX, startY]) {
    const coordinates = [];

    for (let x = startX; x > startX - 2; x--) {
        for (let y = startY; y > startY - 2; y--) {
            coordinates.push([x, y]);
        }
    }

    for (let x = startX - 1; x < startX + 1; x++) {
        for (let y = startY - 2; y > startY - 4; y--) {
            coordinates.push([x, y]);
        }
    }

    return coordinates;
}
/**
 * Helper function for scanner()
 *
 * @param {number[]} param0 - The starting coordinates of the binary number
 * @returns {number[][]} The coordinates for all digits making up the binary number
 */
function getCoordinatesDown([startX, startY]) {
    const coordinates = [];

    for (let x = startX; x < startX + 4; x++) {
        for (let y = startY; y > startY - 2; y--) {
            coordinates.push([x, y]);
        }
    }

    return coordinates;
}
/**
 * Helper function for scanner()
 *
 * @param {number[]} param0 - The starting coordinates of the binary number
 * @returns {number[][]} The coordinates for all digits making up the binary number
 */
function getCoordinatesUp([startX, startY]) {
    const coordinates = [];

    for (let x = startX; x > startX - 4; x--) {
        for (let y = startY; y > startY - 2; y--) {
            coordinates.push([x, y]);
        }
    }

    return coordinates;
}
/**
 * Helper function for findPosition()
 *
 * @param {string} num - The originating string of numbers to manipulate
 * @returns {string[]} An array of cyclic permutations for the given numeric string
 */
function getLowerCyclicPermutations(num) {
    const nines = num.match(/^9*/)[0];
    const numbers = num.split('');
    const length = num.length;
    const cyclicPermutations = numbers.reduce((perms, curr, ix, nums) => {
        const firstNum = nums.shift();
        nums.push(firstNum);
        const newNum = nums.join('');
        // Numbers starting in 9's can be sneaky, e.g. 965 in 649650
        if (nines !== '' && ix === nines.length - 1) {
            const sneakyNum = Number(newNum) - Number(nines);
            perms.push(sneakyNum.toString());
        }

        for (let i = 1; i <= nums.length; i++) {
            perms.push(newNum.substring(0, i));
        }

        return perms;
    }, []);

    const ouroborosNumbers = getOuroborosNumbers(num);
    // Add additional numbers to check for numbers beginning and ending with the same number
    if (ouroborosNumbers > 0) {
        const extraPermutations = numbers
            .slice(0, length - ouroborosNumbers)
            .reduce((perms, curr, ix, nums) => {
                const firstNum = nums.shift();
                nums.push(firstNum);
                const newNum = nums.join('');
                perms.push(newNum);

                return perms;
            }, []);
        cyclicPermutations.push(...extraPermutations);
    }

    return cyclicPermutations.sort((a, b) => Number(a) - Number(b));
}
/**
 * Helper function for findPosition()
 *
 * @param {string} num - The numeric string to check for beginning and ending numbers that are the same or one off of each other
 * @returns {number} The number of characters that match (or are one number off) at the beginning and end of the string
 */
function getOuroborosNumbers(num) {
    const length = num.length;
    const middlePoint = Math.floor(num.length / 2);

    for (let i = middlePoint; i >= 1; i--) {
        const beginningNumber = Number(num.substring(0, i));
        const endingNumber = Number(num.substring(length - i));

        if (num.substring(0, i) === num.substring(length - i)) {
            return i;
        }

        if (beginningNumber === endingNumber - 1) {
            return i;
        }
    }

    return 0;
}
/**
 * https://www.codewars.com/kata/57b06f90e298a7b53d000a86
 *
 * @param {number[]} customers - The customers in line, represented by the amount of time required to checkout
 * @param {number} registers - The number of checkout registers
 * @returns {number} The total time required to checkout all customers
 */
function queueTime(customers, registers) {
    const registerArray = [];
    const maxElements = Math.min(customers.length, registers);

    for (let i = 0; i < maxElements; i++) {
        registerArray[i] = 0;
    }

    customers.forEach((el, ix) => {
        let shortestLine = Math.min(...registerArray);
        registerArray[registerArray.indexOf(shortestLine)] += el;
    });

    return Math.max(...registerArray, 0);
}
/**
 * https://www.codewars.com/kata/5b39e3772ae7545f650000fc
 *
 * @param {string} str - The string to remove duplicate words from
 * @returns {string} The new string with all duplicate words removed
 */
function removeDuplicateWords(str) {
    const singleWords = [];
    return str
        .split(' ')
        .filter(el => {
            if (singleWords.indexOf(el) > -1) {
                return false;
            }

            return singleWords.push(el);
        })
        .join(' ');
}
/**
 * https://www.codewars.com/kata/5ef9c85dc41b4e000f9a645f
 *
 * @param {number[][]} qrcode - Numeric representation of a QR code
 * @returns {string} The decoded message extracted from the QR code
 */
function scanner(qrcode) {
    function convertCoordinateIntoBit([x, y]) {
        const num = qrcode[x][y];
        return bitMask(num, x, y);
    }

    const lengthBits = getCoordinatesUp([18, 20]);
    const lengthInBinary = lengthBits
        .map(convertCoordinateIntoBit)
        .join('');
    const length = parseInt(lengthInBinary, 2);
    const charBits = [
        getCoordinatesUp([14, 20]),
        getCoordinatesCounterClockwise([10, 20]),
        getCoordinatesDown([11, 18]),
        getCoordinatesDown([15, 18]),
        getCoordinatesClockwise([19, 18]),
        getCoordinatesUp([18, 16]),
        getCoordinatesUp([14, 16]),
        getCoordinatesCounterClockwise([10, 16]),
    ];
    const charsInBinary = charBits
        .slice(0, length)
        .map(char => char
            .map(convertCoordinateIntoBit)
            .join(''));
    let message = '';

    for (const binary of charsInBinary) {
        const num = parseInt(binary, 2);
        const char = String.fromCharCode(num);
        message += char;
    }

    return message;
}
/**
 * https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8
 *
 * @param {number[]} peopleInLine - Array of customers, represented by the dollar bill they have (e.g. 25, 50, 100)
 * @returns {string} "YES" or "NO" to indicate if all customers can be provided change when purchasing their ticket
 */
function tickets(peopleInLine) {
    let isChangeAvailable = true;
    const ticketPrice = 25;
    const changeDrawer = peopleInLine.reduce((change, bill, index) => {
        let changeRequired = bill - ticketPrice;
        change[bill]++;

        if (changeRequired >= 50) {
            if (change[50] < 1 && change[25] > 1) {
                changeRequired -= 50;
                change[25] -= 2;
            } else {
                changeRequired -= 50;
                change[50]--;
            }
        }

        if (changeRequired >= 25) {
            changeRequired -= 25;
            change[25]--;
        }

        if (!Object.values(change).every(bill => bill > -1)) {
            isChangeAvailable = false;
        }

        return change;
    }, {
        25: 0,
        50: 0,
        100: 0,
    });

    return isChangeAvailable ? 'YES' : 'NO';
}
