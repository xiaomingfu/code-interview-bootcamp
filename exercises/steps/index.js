// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let row = 0; row < n; row++) {
    let res = "";
    for (let cell = 0; cell < n; cell++) {
      if (cell <= row) {
        res += "#";
      } else {
        res += " ";
      }
    }
    console.log(res);
  }
  // solution 1
  //   for (let i = 1; i <= n; i++) {
  //     console.log("#".repeat(i) + " ".repeat(n - i));
  //   }
}

module.exports = steps;
