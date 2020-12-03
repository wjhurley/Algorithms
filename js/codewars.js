'use strict';

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
};
/**
 * https://www.codewars.com/kata/57b06f90e298a7b53d000a86
 *
 * @param {number[]} customers - The customers in line, represented by the amount of time they have to checkout
 * @param {number} registers - The number of checkout registers
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
  };
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
