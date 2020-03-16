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

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    // let middle = Math.ceil(arr.length / 2);

    // let left = [];
    // let right = [];
    // for (let i = 0; i < middle; i++) {
    //   left.push(arr[i]);
    // }
    // for (let i = middle; i < arr.length; i++) {
    //   right.push(arr[i]);
    // }
    const center = Math.floor(arr.length / 2);
    let left = arr.slice(0, center);
    let right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  let result = [];

  // make sure both left and right arenot empty
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  return [...result, ...left, ...right];
}

mergeSort([43, 2, 34, 5, 63, 245]);

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
