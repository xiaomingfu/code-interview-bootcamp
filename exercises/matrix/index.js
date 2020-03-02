// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let num = 1;
  let row = 0;
  let col = 0;
  while (num < n * n) {
    if (row < n - 1) {
      if (col < n - 1) {
        results[row][col] = num;
        num += 1;
        col += 1;
      }
      matrix[row][col] = num;
      num += 1;
      row += 1;
    }

    while (col > 0) {
      matrix[row][col] = num;
      num += 1;
      col -= 1;
    }
    while (row > 0) {
      matrix[row][col] = num;
      num += 1;
      row -= 1;
    }
    if (row === 0 && col === 0) {
      row += 1;
      col += 1;
      matrix[row][col] = num;
    }
    num += 1;
  }
}

module.exports = matrix;
