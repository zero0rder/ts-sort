import { countingSort, countingSortNeg } from '.';
import { unsortedRadix, sortedRadix, sortedNegRadix, unsortedNegRadix } from '../utils';

test('countingSort:returns sorted array', () => {
  expect(countingSort(unsortedRadix)).toEqual(sortedRadix);
});

test('countingSortNeg:returns sorted array', () => {
  expect(countingSortNeg(unsortedNegRadix)).toEqual(sortedNegRadix);
});
