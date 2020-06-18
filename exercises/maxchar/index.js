// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  let maxchar = '';
  let maxOcc = 0;
  for (const char in chars) {
    if (maxOcc < chars[char]) {
      maxOcc = chars[char];
      maxchar = char;
    }
  }

  return maxchar;
}

maxChar('abcccccccd');

module.exports = maxChar;
