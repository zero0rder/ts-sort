import { qsortRecursive, qsortIterative } from '.';
import { unsortedArray, sortedArray } from '../utils/index';

test('qsort:recursive returns sorted array', async () => {
    qsortRecursive(unsortedArray);
    expect(unsortedArray).toEqual(sortedArray);
});
  
test('qsort:iterative returns sorted array', async () => {
    expect(qsortIterative(unsortedArray)).toEqual(sortedArray);
});