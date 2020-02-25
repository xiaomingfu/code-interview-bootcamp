// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution 1
// function reverse(str) {
//   let reversed = "";
// for (let char of str) {
//   reversed = char + reversed;
// }
// return reversed;

// while loop
//   let newStr = "";
//   let length = str.length;
//   while (length > 0) {
//     newStr = newStr + str[length - 1];
//     length--;
//   }
//   return newStr;
// }

// solution 2
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// solution 3
function reverse(str) {
  return str.split("").reduce((rev, char) => {
    return char + rev;
  }, "");
}
module.exports = reverse;
