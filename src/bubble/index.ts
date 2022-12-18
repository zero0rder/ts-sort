/**
 *  BUBBLE SORT: T = O(n^2), S = O(1)
 */

export function bubbleSort(a: (number | string)[]): (number | string)[] {
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }

  return a;
}
