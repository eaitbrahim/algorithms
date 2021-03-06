// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // S1
  //   const mapA = buildMap(stringA);
  //   const mapB = buildMap(stringB);
  //   if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;
  //   for (let ele in mapA) {
  //     if (mapA[ele] !== mapB[ele]) return false;
  //   }
  //   return true;

  // S2
  return cleanString(stringA) === cleanString(stringB);
}
function buildMap(str) {
  const map = {};
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    map[char] = map[char] + 1 || 1;
  }
  return map;
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
