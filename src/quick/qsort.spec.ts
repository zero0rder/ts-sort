import { qsortRecur, qsortIter } from '.';
import { unsortedArray, sortedArray } from '../utils/index';

test('qsort:recursive returns sorted array', async () => {
  qsortRecur(unsortedArray);
  expect(unsortedArray).toEqual(sortedArray);
});

test('qsort:iterative returns sorted array', async () => {
  expect(qsortIter(unsortedArray)).toEqual(sortedArray);
});
