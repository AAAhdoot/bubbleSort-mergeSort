function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (compare(array[j], array[j + 1])) {
        swap(array, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return array;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function compare(a, b) {
  return a > b;
}
