# Diffie-Hellman Key Exchange Algorithm

```javascript

const p = findNthPrimeNumber(26);
const a = findNthPrimitiveRoot(2, p);

const alicePrivateNumber = 5;
const aliceResult = Math.pow(a, alicePrivateNumber) % p;

const bobPrivateNumber = 9;
const bobResult = Math.pow(a, bobPrivateNumber) % p;

const sBob = Math.pow(aliceResult, bobPrivateNumber) % p;
const sAlice = Math.pow(bobResult, alicePrivateNumber) % p;

console.log(sAlice + ' - ' + sBob);

```