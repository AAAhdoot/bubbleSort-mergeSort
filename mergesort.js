function defaultComparator(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

function split(wholeArray) {
  let midpoint = Math.floor(wholeArray.length / 2);

  let firstHalf = new Array(midpoint);

  let secondHalf = new Array(wholeArray.length - midpoint);

  for (let i = 0; i < firstHalf.length; i++) {
    firstHalf[i] = wholeArray[i];
  }

  for (let j = 0; j < secondHalf.length; j++) {
    secondHalf[j] = wholeArray[midpoint + j];
  }

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2, func = defaultComparator) {
  const merged = new Array(arr1.length + arr2.length);
  let ptr1 = 0,
    ptr2 = 0,
    current = 0;
  let funcEval = 0;
  while (ptr1 < arr1.length && ptr2 < arr2.length) {
    let val1 = arr1[ptr1];
    let val2 = arr2[ptr2];
    funcEval = func(val1, val2);
    if (funcEval <= 0) {
      merged[current] = val1;
      ptr1++;
    } else {
      merged[current] = val2;
      ptr2++;
    }
    current++;
  }

  while (ptr1 < arr1.length) {
    merged[current] = arr1[ptr1];
    current++;
    ptr1++;
  }
  while (ptr2 < arr2.length) {
    merged[current] = arr2[ptr2];
    current++;
    ptr2++;
  }
  return merged;
}

function mergeSort(array, func = defaultComparator) {
  if (array.length === 1) {
    return array;
  }
  let splitArray = split(array);
  let firstHalf = mergeSort(splitArray[0], func);
  let secondHalf = mergeSort(splitArray[1], func);
  return merge(firstHalf, secondHalf, func);

  /* your code here */
}
