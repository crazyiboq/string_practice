// 1

// function getFiniteNumbers(arr) {
//   return arr.filter(Number.isFinite);
// }
// function getFiniteNumbersV2(arr) {
//   return arr.filter(isFinite);
// }
// function getNaN(arr) {
//   return arr.filter(Number.isNaN);
// }
// function getNaNV2(arr) {
//   return arr.filter(isNaN);
// }
// function getIntegers(arr) {
//   return arr.filter(Number.isInteger);
// }
// const array = [12, 22, 32, NaN, Infinity, null, undefined,'23214', 'ouch',];

// console.log("getFiniteNumbers:", getFiniteNumbers(testArray)); 
// console.log("getFiniteNumbersV2:", getFiniteNumbersV2(testArray)); 
// console.log("getNaN:", getNaN(testArray)); 
// console.log("getNaNV2:", getNaNV2(testArray)); 
// console.log("getIntegers:", getIntegers(testArray)); 


// 2
// function getParsedIntegers(arr) {
//   return arr.map(Number.parseInt);
// }

// function getParsedIntegersV2(arr) {
//   return arr.map(parseInt);
// }
// function getParsedIntegersV2(arr) {
//   return arr.map(parseInt);
// }
// function getParsedFloats(arr) {
//   return arr.map(Number.parseFloat);
// }
// function getParsedFloatsV2(arr) {
//   return arr.map(parseFloat);
// }

// 3
// function getMaxAbsoluteNumber(arr) {
// function getMaxAbsoluteNumber(arr) {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     return null;
//   }

//   return arr.reduce((max, curr) => {
//     const absCurr = Math.abs(curr);
//     return absCurr > max ? absCurr : max;
//   }, 0);
// }

// console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20]));

// 4

function isEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));
console.log(isFinite(0.1))
console.log(isFinite(0.2))
console.log(isFinite(0.3))

function getMaxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

console.log(getMaxOfThree(0.1, 0.2, 0.3));

console.log(Number.isInteger(0.1));
console.log(Number.isInteger(0.2));

function roundToTwo(num) {
    return Math.round(num * 100) / 100;
}

console.log(roundToTwo(0.123));
console.log(roundToTwo(2.2431));



