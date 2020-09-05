/**
 * Given an array of different colored socks with each color represented by a unique integer,
 * return the number of pairs that can be made from the socks.
 * https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 *
 * @constructor
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
 * https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen
 *
 * @param {number} n - The number of steps taken during the hike
 * @param {string} s - String representation of steps taken during the hike
 * @returns {number} The number of valleys walked during the hike
 */
function countingValleys(n, s) {

}