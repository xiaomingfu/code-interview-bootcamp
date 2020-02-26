// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str
    .split("")
    .reverse()
    .join("");
  var i = 0;
  while (i < str.length - 1) {
    if (reversed[i] !== str[i]) {
      return false;
    }
    i++;
  }
  return true;
}

module.exports = palindrome;
