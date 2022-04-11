import { ssort } from '.';
import { unsortedArray, sortedArray } from '../utils/index';
  
test('ssort:returns sorted array', async () => {
    expect(ssort(unsortedArray)).toEqual(sortedArray);
});