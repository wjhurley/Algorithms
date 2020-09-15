/**
 * Given an array of different colored socks with each color represented by a unique integer,
 * return the number of pairs that can be made from the socks.
 * https://www.hackerrank.com/challenges/sock-merchant
 *
 * @param {number} n - The number of socks
 * @param {number[]} ar - Array of socks in various colors
 * @returns {number} The number of pairs that can be made
 */
function sockMerchant(n, ar) {
    const sortedSockArray = ar.reduce((sockArray, sock) => {
        const index = sockArray.findIndex(socks => socks[0] === sock);

        if (index === -1) {
            sockArray.push([sock]);
        } else {
            sockArray[index].push(sock);
        }

        return sockArray;
    }, []);

    return sortedSockArray.reduce((total, socks) => {
        const matches = Math.floor(socks.length / 2);

        return total += matches;
    }, 0);
}

/**
 * Given a string where each character indicates a direction of 'up' or 'down', determine how
 * many valleys are walked during the hike. The hike begins and ends at sea level.
 * https://www.hackerrank.com/challenges/counting-valleys
 *
 * @param {number} n - The number of steps taken during the hike
 * @param {string} s - String representation of steps taken during the hike
 * @returns {number} The number of valleys walked during the hike
 */
function countingValleys(n, s) {
    let valleys = 0;
    const elevations = s.split('').reduce((steps, step, ix) => {
        const direction = step === 'U' ? 1 : -1;

        if (ix === 0) {
            steps.push(direction);
        } else {
            steps.push(steps[ix - 1] + direction);
        }

        return steps;
    }, []);

    for (let i = 0; i < elevations.length; i++) {
        if (elevations[i] < 0 && (i === 0 || elevations[i - 1] === 0)) {
            valleys++;
        }
    }

    return valleys;
}

/**
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds
 *
 * @param {number[]} c - Array of binary integers representing cumulus and thunderhead clouds
 * @returns {number} The shortest number of jumps to win the game
 */
function jumpingOnClouds(c) {
    let index = 0;
    let jumps = 0;

    while (index < c.length) {
        if (index === c.length - 1) {
            index++;
            continue;
        }

        if (c[index + 2] === 1) {
            index++;
            jumps++;
        } else {
            index += 2;
            jumps++;
        }
    }

    return jumps;
}

/**
 * https://www.hackerrank.com/challenges/repeated-string
 *
 * @param {string} s - String to repeat infinitely
 * @param {number} n - Length of infinitely repeating string (s)
 * @returns {number} The number of letter a's in the string of length n
 */
function repeatedString(s, n) {
    const numAInString = [...s].filter(char => char === 'a').length;
    const repeatsRequired = Math.ceil(n / s.length);
    const totalCharacters = repeatsRequired * s.length;
    const numCharsInLastRepeat = s.length - (totalCharacters % n);
    const numAInLastRepeat = [...s.substring(0, numCharsInLastRepeat)].filter(char => char === 'a').length;

    return numAInString * (repeatsRequired - 1) + numAInLastRepeat;
}

/**
 * https://www.hackerrank.com/challenges/new-year-chaos
 *
 * @param {number[]} q - Array of integers representing queue
 * @returns {number | string} The number of bribes needed and possibly an error message
 */
function minimumBribes(q) {
    let swaps = 0;

    for (let i = 0; i < q.length; i++) {
        let bribes = q[i] - (i + 1);
        let maxAdvance = q[i] - 2 > 0 ? q[i] - 2 : 0;

        if (bribes > 2) {
            // console.log AND return used here and below because challenge expects console.log rather than returned value
            console.log('Too chaotic');
            return 'Too chaotic';
        }

        for (let j = maxAdvance; j < i; j++) {
            if (q[j] > q[i]) {
                swaps++;
            }
        }
    }

    console.log(swaps);
    return swaps;
}

/**
 * https://www.hackerrank.com/challenges/minimum-swaps-2
 *
 * @param {number[]} arr - Array of integers to sort
 * @returns {number} The number of swaps required to sort the array in ascending order
 */
function minimumSwaps(arr) {
    return arr.reduce((swaps, value, index, arrCopy) => {
        let location = 0;

        if (value === index + 1) {
            return swaps;
        }

        for (let i = index; i < arrCopy.length; i++) {
            if (arrCopy[i] === index + 1) {
                location = i;
                break;
            }
        }

        arrCopy[location] = arrCopy[index];
        arrCopy[index] = index + 1;
        return ++swaps;
    }, 0);
}

/**
 * https://www.hackerrank.com/challenges/crush
 *
 * @param {number} n - The length of the array of zeroes
 * @param {(number[])[]} queries - Two-dimensional array of numbers indicating a starting index, ending index, and number to add to each array value, respectively
 * @returns {number} The maximum value in the array after modifications
 */
function arrayManipulation(n, queries) {
    const arr = Array(n + 1);
    let maxValue = 0;
    let currentNumber = 0;

    queries.forEach(([start, end, value]) => {
        arr[start] = arr[start] || { start: 0, end: 0 };
        arr[end] = arr[end] || { start: 0, end: 0 };
        arr[start].start += value;
        arr[end].end += value;
    });

    arr.forEach(({ start, end }) => {
        if (start || end) {
            currentNumber += start;

            if (currentNumber > maxValue) {
                maxValue = currentNumber;
            }

            currentNumber -= end;
        }
    });

    return maxValue;
}

/**
 * https://www.hackerrank.com/challenges/2d-array
 *
 * @param {(number[])[]} arr - 6x6 two-dimensional array
 * @returns {number} The maximum value achieved by adding an hourglass subset
 */
function hourglassSum(arr) {
    const hourglasses = [];

    arr.forEach((row, index) => {
        if (index > 3) {
            return;
        }

        for (let i = 0; i < 4; i++) {
            const hourglass = [];
            hourglass.push(arr[index][i]);
            hourglass.push(arr[index][i + 1]);
            hourglass.push(arr[index][i + 2]);
            hourglass.push(arr[index + 1][i + 1]);
            hourglass.push(arr[index + 2][i]);
            hourglass.push(arr[index + 2][i + 1]);
            hourglass.push(arr[index + 2][i + 2]);
            hourglasses.push(hourglass.reduce((acc, curr) => acc + curr, 0));
        }
    });

    return Math.max(...hourglasses);
}