// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (var row = 0; row < n; row++) {
    let result = "";
    for (var col = 0; col < 2 * n - 1; col++) {
      const midpoint = Math.floor((2 * n - 1) / 2);
      if (midpoint - row <= col && midpoint + row >= col) {
        result += "#";
      } else {
        result += " ";
      }
    }
    console.log(result);
  }
}

module.exports = pyramid;
