import { radixSort } from '.';
import { unsortedRadix, sortedRadix } from '../utils';

test('radixSort:returns sorted array', async () => {
  radixSort(unsortedRadix);
  expect(unsortedRadix).toEqual(sortedRadix);
});
