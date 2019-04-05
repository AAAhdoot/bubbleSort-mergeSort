describe('Bubble Sort', function() {
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
    spyOn(window, 'compare').and.callThrough();
  });

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
    expect(swap.calls.count()).toEqual(0);
    expect(compare.calls.count()).toEqual(0);
  });
  it('handles a single element array', function() {
    expect(bubbleSort([1])).toEqual([1]);
    expect(swap.calls.count()).toEqual(0);
    expect(compare.calls.count()).toEqual(0);
  });
  it('handles an array with multiple elements', function() {
    expect(bubbleSort([24, 32, 1, 5, 8])).toEqual([1, 5, 8, 24, 32]);
    expect(swap.calls.count()).toEqual(6);
    expect(compare.calls.count()).toEqual(9);
  });
  it('handles a completely sorted array', function() {
    expect(bubbleSort([10, 11, 12, 13, 14])).toEqual([10, 11, 12, 13, 14]);
    expect(swap.calls.count()).toEqual(0);
    expect(compare.calls.count()).toEqual(4);
  });
});
