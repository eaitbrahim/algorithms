// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //S1
  //   const results = [];
  //   const strArr = str.split(' ');
  //   for (let ele of strArr) {
  //     let word = ele[0].toUpperCase() + ele.substring(1);
  //     results.push(word);
  //   }
  //   return results.join(' ');
  //S2
  let result = str[0].toUpperCase();
  for (let idx = 1; idx < str.length; idx++) {
    if (str[idx - 1] === ' ') {
      result += str[idx].toUpperCase();
    } else {
      result += str[idx];
    }
  }
  return result;
}

module.exports = capitalize;
