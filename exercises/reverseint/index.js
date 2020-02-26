// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sign = Math.sign(n);
  let temp = n.toString().split("");
  if (sign === -1) {
    temp = temp.slice(1);
  }
  temp = temp.reverse();
  return parseInt(temp.join(""), 10) * sign;
}

module.exports = reverseInt;
