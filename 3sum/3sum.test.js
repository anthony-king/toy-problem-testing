import threeSum from './3sum';

describe('threeSum', () => {
  test('is a function', () => {
    expect(threeSum).toBeInstanceOf(Function);
  });

  test('it returns an array', () => {
    expect(threeSum([-1, 0, 1])).toBeInstanceOf(Array);
  });

  test('it returns all three combinations summing to zero', () => {
    expect(threeSum([-1, 0, 1])).toEqual([[-1, 0, 1]]);
    expect(threeSum([-2, 2, 0, 1])).toEqual([[-2, 2, 0]]);
  });

  test('it handles no possible sums to zero', () => {
    expect(threeSum([-1, 2, 3])).toEqual([]);
  });
});
