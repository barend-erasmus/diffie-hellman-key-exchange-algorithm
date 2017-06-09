function findNthPrimitiveRoot(n, p) {

    let cnt = 0;

    for (let i = 0; i < p; i++) {
        if (isPrimitiveRoot(i, p)) {
            cnt++;
        }

        if (cnt >= n) {
            return i;
        }
    }

    return -1;
}

function isPrimitiveRoot(a, p) {
    const arr = [];

    for (let i = 1; i <= p - 1; i++) {
        const value = Math.pow(a, i) % p;


        if (value >= p) {
            return false;
        }

        if (arr.indexOf(value) > -1) {
            return false;
        }

        arr.push(value);

    }

    return true;
}



function findNthPrimeNumber(n) {

    var i = 0;
    var cnt = 1;
    while (i < n) {
        if (isPrime(cnt)) {
            i++;

        }

        if (i < n) {
            cnt++
        }
    }

    return cnt;
}


function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}


const p = findNthPrimeNumber(26);
const a = findNthPrimitiveRoot(2, p);

const alicePrivateNumber = 5;
const aliceResult = Math.pow(a, alicePrivateNumber) % p;

const bobPrivateNumber = 9;
const bobResult = Math.pow(a, bobPrivateNumber) % p;

const sBob = Math.pow(aliceResult, bobPrivateNumber) % p;
const sAlice = Math.pow(bobResult, alicePrivateNumber) % p;

console.log(sAlice + ' - ' + sBob);
