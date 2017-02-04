function findNthPrimativeRoot(n, p) {

    var cnt = 0;

    for (var i = 0; i < p; i++) {
        if (isPrimativeRoot(i, p)) {
            cnt++;
        }

        if (cnt >= n) {
            return i;
        }
    }

    return -1;
}

function isPrimativeRoot(a, p) {
    var arr = [];

    for (var i = 1; i <= p - 1; i++) {
        var value = Math.pow(a, i) % p;


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
    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}


var p = findNthPrimeNumber(26);
var a = findNthPrimativeRoot(2, p);

var alicePrivateNumber = 5;
var aliceResult = Math.pow(a, alicePrivateNumber) % p;


var bobPrivateNumber = 9;
var bobResult = Math.pow(a, bobPrivateNumber) % p;


var sAlice = Math.pow(aliceResult, bobPrivateNumber) % p;
var sBob = Math.pow(bobResult, alicePrivateNumber) % p;

console.log(sAlice + ' - ' + sBob);
