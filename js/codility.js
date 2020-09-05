/*Given a zero-indexed array A of integers, returns an equilibrium index. The function will return -1 if no equilibrium index exists. First or last indices can be considered an equilibrium index if the sum of all other indices equal to 0.*/
function equilibriumIndex(A) {
    var sum;
    var sumRight;
    var sumLeft = 0;

    if (!A || A.length === 0) {
        return -1;
    } else if (A.length === 1) {
        sum = A[0];
    } else {
        sum = A.reduce(function(prev, curr) {
            return prev + curr;
        });
    }

    for (var i = 0; i < A.length; i++) {
        sumRight = sum - sumLeft - A[i];

        if (sumLeft === sumRight) {
            return i;
        }

        sumLeft += A[i];
    }

    return -1;
}
/*Given a positive number N, the function returns the length of the longest binary gap (zeroes surrounded by ones on both sides). Returns 0 if N doesn't contain a binary gap.*/
function binaryGap(N) {
    var binary = (N >>> 0).toString(2);
    var regBinaryGap = /1[0]+1/g;
    var arrBinary = [];

    for (let i = 0; i < binary.length; i++) {
        let binarySub = binary.substr(i);
        if (binarySub.search(regBinaryGap) !== -1) {
            arrBinary.push(binarySub.match(regBinaryGap)[0]);
        }
    }
    var arrBinarySorted = arrBinary.sort(function(a, b) {return b.length - a.length;}),
        largestBinaryGap = arrBinarySorted[0]
            ? arrBinarySorted[0].substring(1, arrBinarySorted[0].length - 1).length
            : 0;
    return largestBinaryGap;
}
/*Given an array with an odd number of elements and each element's value matches another except one, returns the value of the non-matching element.*/
function oddOccurrencesInArray(A) {
    A.sort(function(a, b) {return a - b;});

    for (var i = 0; i < A.length; i += 2) {
        if (A[i] !== A[i + 1] || A[i] === A[A.length - 1]) {
            if (A[i + 1] === A[i + 2] || A[i - 1] === A[i - 2]) {
                return A[i];
            }
        }
    }
}
/*Given an array A of integers, the function shifts the array to the right K times, with the last elements moving to the beginning.*/
function cyclicRotation(A, K) {
    var slicer = K > A.length
        ? -(K % A.length)
        : -K;
    var arrRotate;
    var arrNew;

    if (K === 0 || A.length === K) {
        return A;
    }

    arrRotate = A.splice(slicer);
    arrNew = arrRotate.concat(A);

    return arrNew;
}
/*Given 3 integers, the function returns the amount of jumps (D) a frog would need to make to get from position X to a position greater than or equal to Y.*/
function frogJmp(X, Y, D) {
    if ((Y - X) % D === 0) {
        return (Y - X) / D;
    } else {
        return Math.ceil((Y - X) / D);
    }
}
/*Given an array with N integers and unique values ranging from 1 to N + 1, the function returns the missing value in the range.*/
function permMissingElem(A) {
    var size = A.length;
    var sum = (size + 1) * (size + 2) / 2;

    for (var i = 0; i < size; i++) {
        sum -= A[i];
    }
    return sum;
}
