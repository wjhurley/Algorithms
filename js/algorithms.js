// NOT A CHALLENGE ON FCC - Fibonacci sequence that starts with 0 as the first number in the sequence (i.e. 0,1,1...)
function fibonacci(n) {
    let intA = 0;
    let intB = 1;
    let intFib = 1;

    if (n === 0) {
        return intA;
    } else if (n === 1) {
        return intB;
    } else {
        for (let i = 2; i <= n; i++) {
            intFib = intA + intB;
            intA = intB;
            intB = intFib;
        }
    }

    return intFib;
}
// Coding challenge from interview on 5/17/21 - encrypt and decrypt UDP payloads
class Payload {
    constructor() {
        this.seed = parseInt('0xEC', 16);
    }

    static encrypt(str) {
        const encoder = new TextEncoder();
        const encodedArray = encoder.encode(str);
        const encryptedArray = new Uint8Array(encodedArray);

        for (const [index, val] of encodedArray.entries()) {
            if (index === 0) {
                encryptedArray[index] = val ^ this.seed;
                continue;
            }

            encryptedArray[index] = encryptedArray[index - 1] ^ val;
        }

        return encryptedArray;
    }

    static decrypt(uint) {
        const decoder = new TextDecoder();
        const encodedArray = new Uint8Array(uint);

        for (const [index, val] of uint.entries()) {
            if (index === 0) {
                encodedArray[index] = val ^ this.seed;
                continue;
            }

            encodedArray[index] = uint[index - 1] ^ val;
        }

        return decoder.decode(encodedArray);
    }
}
