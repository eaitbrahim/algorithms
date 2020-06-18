// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // S1
  //return str.split('').reverse().join('');

  let reversedStr = '';
  //S2
  // const strArr = str.split('');
  // for(let i = strArr.length - 1; i >= 0 ; i--){
  //     reversedStr += strArr[i];
  // }

  //S3
  // for(let char of str){
  //     reversedStr = char + reversedStr;
  // }

  //return reversedStr;

  //S4
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
