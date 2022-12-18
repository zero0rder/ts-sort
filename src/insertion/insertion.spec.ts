import { insertionSort } from '.';
import { unsortedArray, sortedArray } from '../utils';

test('insertionSort:returns sorted array', () => {
  expect(insertionSort(unsortedArray)).toEqual(sortedArray);
});
