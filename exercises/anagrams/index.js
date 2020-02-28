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
  const listA = stringA.replace(/\s/g, "").split("");
  const listB = stringB.replace(/\s/g, "").split("");

  if (listA.length === listB.length) {
    let mapA = {};
    let mapB = {};
    for (let char of listA) {
      if (mapA[char]) {
        mapA[char]++;
      } else {
        mapA[char] = 1;
      }
    }

    for (let char of listB) {
      if (mapB[char]) {
        mapB[char]++;
      } else {
        mapB[char] = 1;
      }
    }
    for (let char of listA) {
      return mapA[char] === mapB[char];
    }
  } else {
    return false;
  }
}

module.exports = anagrams;
