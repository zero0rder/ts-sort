import { selSort, selSortInplace } from '.';
import { unsortedArray, sortedArray } from '../utils';

test('ssort:returns sorted array', async () => {
  expect(selSort(unsortedArray)).toEqual(sortedArray);
});

test('ssortInplace:returns sorted array in-place', async () => {
  expect(selSortInplace([5, 9, -2, 4, 3, 8])).toEqual(sortedArray);
});
