import { ssort, ssortInplace } from '.'
import { unsortedArray, sortedArray } from '../utils/index'
  
test('ssort:returns sorted array', async () => {
    expect(ssort(unsortedArray)).toEqual(sortedArray)
});

test('ssortInplace:returns sorted array in-place', async () => {
    let unsorted = [ 5, 9, -2, 4, 3, 8 ]
    ssortInplace(unsorted)
    expect(unsorted).toEqual(sortedArray)
});