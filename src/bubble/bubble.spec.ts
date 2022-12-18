import { bubbleSort } from '.';
import { unsortedArray, sortedArray } from '../utils';

test('bubbleSort:returns sorted array', () => expect(bubbleSort(unsortedArray)).toEqual(sortedArray));
