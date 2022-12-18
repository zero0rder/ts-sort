/**
 *  MERGESORT:  T = O(n log(n)), S = O(n) {STABLE}
 */

export function mergeSort(arr: (number | string)[]): (number | string | undefined)[] {
  if (arr.length <= 1) return arr;

  return merge(mergeSort(arr.splice(0, Math.floor(arr.length / 2))), mergeSort(arr));
}

function merge(
  left: (number | string | undefined)[],
  right: (number | string | undefined)[],
): (number | string | undefined)[] {
  const auxArr = [];

  while (left.length && right.length) {
    if (left[0] && right[0]) {
      left[0] < right[0] ? auxArr.push(left.shift()) : auxArr.push(right.shift());
    }
  }

  return [...auxArr, ...left, ...right];
}
