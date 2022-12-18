import { mergeSort } from '.';
import { unsortedArray, sortedArray } from '../utils/index';

test('mergeSort:returns sorted array', () => expect(mergeSort(unsortedArray)).toEqual(sortedArray));
