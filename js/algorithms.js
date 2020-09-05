/*NOT A CHALLENGE ON FCC - Fibonacci sequence that starts with 0 as the first number in the sequence (i.e. 0,1,1...)*/
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
