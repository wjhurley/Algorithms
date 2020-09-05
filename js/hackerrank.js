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
