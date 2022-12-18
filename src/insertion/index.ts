/**
 *  INSERTION SORT:  T = O(n^2), S = O(1) {STABLE}
 */

export function insertionSort(a: (number | string)[]): (number | string)[] {
  let key;
  let j;

  for (let i = 1; i < a.length; i++) {
    key = a[i];
    j = i - 1;

    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j = j - 1;
    }

    a[j + 1] = key;
  }

  return a;
}
