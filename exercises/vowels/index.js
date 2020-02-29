// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const regex = /[aeiou]/gi;
  //   match() method retrieve the result of matching a string against a regular expression
  const matchs = str.match(regex);
  return matchs ? matchs.length : 0;
}

module.exports = vowels;
// // solution 1
// const vowels = ["a", "e", "i", "o", "u"];
// let count = 0;
// for (let char of str.toLowerCase()) {
//   //   includes() method return true or false
//   vowels.includes(char) ? count++ : count;
//   // for (let i = 0; i < vowels.length; i++) {
//   //   if (char === vowels[i]) {
//   //     count += 1;
//   //   }
//   // }
// }
// return count;
