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
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

// function anagrams(stringA, stringB) {
//   const charMapA = buildCharMap(stringA);
//   const charMapB = buildCharMap(stringB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }
//   for (let char in charMapA) {
//     return charMapA[char] === charMapB[char];
//   }

//   // better solution
//   //   const listA = stringA
//   //     .replace(/\s/g, "")
//   //     .toLowerCase()
//   //     .split("");
//   //   const listB = stringB
//   //     .replace(/\s/g, "")
//   //     .toLowerCase()
//   //     .split("");
//   //   if (listA.length === listB.length) {
//   //     let mapA = {};
//   //     let mapB = {};
//   //     for (let char of listA) {
//   //       if (mapA[char]) {
//   //         mapA[char]++;
//   //       } else {
//   //         mapA[char] = 1;
//   //       }
//   //     }
//   //     for (let char of listB) {
//   //       if (mapB[char]) {
//   //         mapB[char]++;
//   //       } else {
//   //         mapB[char] = 1;
//   //       }
//   //     }
//   //     for (let char of listA) {
//   //       return mapA[char] === mapB[char];
//   //     }
//   //   } else {
//   //     return false;
//   //   }
// }
// // helper function
// function buildCharMap(str) {
//   const charList = str
//     //   replace all not word char
//     .replace(/[^\w]/g, "")
//     .toLowerCase()
//     // turn into arr
//
//   let buildCharMap = {};
//   for (let char of charList) {
//     //   count char appearance
//     buildCharMap[char] = buildCharMap[char] + 1 || 1;
//   }
//   return buildCharMap;
// }

module.exports = anagrams;
