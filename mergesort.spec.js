describe('Split Array function', function() {
  it('is able to split an even length array into two halves', function() {
    let evenArray = [0, 1, 2, 3];
    expect(split(evenArray)).toEqual([[0, 1], [2, 3]]);
  });
  it('is able to split an odd length array into two halves', function() {
    let oddArray = [0, 1, 2, 3, 4];
    expect(split(oddArray)).toEqual([[0, 1], [2, 3, 4]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two same length sorted arrays into one sorted array', function() {
    let arr1 = [0, 1];
    let arr2 = [2, 3];
    expect(merge(arr1, arr2)).toEqual([0, 1, 2, 3]);
  });
  it('is able to merge two different length sorted arrays into one sorted array', function() {
    let arr1 = [0, 1, 2];
    let arr2 = [3, 4];
    expect(merge(arr1, arr2)).toEqual([0, 1, 2, 3, 4]);
  });
});

describe('MergeSort function', function() {
  it('is able to sort an even length array', function() {
    let unsorted = [6, 7, 32, 1];
    expect(mergeSort(unsorted)).toEqual([1, 6, 7, 32]);
  });
  it('is able to sort an odd length array', function() {
    let unsorted = [6, 7, 32, 1, 99];
    expect(mergeSort(unsorted)).toEqual([1, 6, 7, 32, 99]);
  });
  it('is able to sort an array with duplicates', function() {
    let unsorted = [6, 7, 32, 1, 99, 5, 32, 5];
    expect(mergeSort(unsorted)).toEqual([1, 5, 5, 6, 7, 32, 32, 99]);
  });
  it('is able to sort an array of strings', function() {
    let unsorted = ['hello', 'darkness', 'my', 'old', 'friend'];
    expect(mergeSort(unsorted)).toEqual([
      'darkness',
      'friend',
      'hello',
      'my',
      'old'
    ]);
  });
  it('works for array of objects', function() {
    let arrToSort = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
    let comparator = function comparator(a, b) {
      if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
      if (a.age > b.age) return 1; // returning  `1` means "b goes before a"
      return 0; // returning 0 means "a and b are equivalent"
    };
    expect(mergeSort(arrToSort, comparator)).toEqual([
      { age: 2 },
      { age: 4 },
      { age: 8 },
      { age: 9 }
    ]);
  });
});
