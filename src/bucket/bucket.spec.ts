import { bucketSort } from '.';
import { unsortedRadix, sortedRadix } from '../utils';

test('bucketSort:returns sorted array', () => {
  expect(bucketSort(unsortedRadix)).toEqual(sortedRadix);
});
