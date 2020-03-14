// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      let smallest = arr[i];
      if (arr[j] < smallest) {
        smallest = arr[j];
        arr[j] = arr[i];
        arr[i] = smallest;
      }
    }
  }
  return arr;
}

function mergeSort(arr) {}

function merge(left, right) {
  let merge = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      merge.push(right.shift());
    } else {
      merge.push(left.shift());
    }
  }

  if (left.length > 0) {
    merge.push(...left);
  }
  if (right.length > 0) {
    merge.push(...right);
  }
  return merge;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
