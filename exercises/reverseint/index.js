// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // S1
  //   let sign = '';
  //   const strArr = n.toString().split('');

  //   if (strArr[0] === '-') sign = '-';
  //   return parseInt(`${sign}${strArr.reverse().join('')}`);

  //S2
  return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
}

module.exports = reverseInt;
