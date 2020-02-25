// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let newStr = "";
  let length = str.length;
  while (length > 0) {
    newStr = newStr + str[length - 1];
    length--;
  }
  return newStr;
}

module.exports = reverse;
