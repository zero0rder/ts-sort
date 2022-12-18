/**
 *   Selection Sort - T: O(n^2), S: O(n) {UnStable}
 */

export function selSort(a: number[]): number[] {
  const _sortedA: number[] = [];

  while (a.length > 0) {
    _sortedA.push(a.splice(findSmallestIndex(a), 1)[0]);
  }

  return _sortedA;
}

/**
 *   Selection Sort Inplace - T: O(n^2), S: O(1) {UnStable}
 */

export function selSortInplace(a: number[]): number[] {
  for (let i = 0; i < a.length - 1; i++) {
    let j = i + 1;

    while (j < a.length) {
      if (a[i] > a[j]) {
        [a[i], a[j]] = [a[j], a[i]];
      }
      j++;
    }
  }

  return a;
}

function findSmallestIndex(a: number[]): number {
  let smallestNumber = a[0];
  let smallestIndex = 0;

  for (let i = 0; i < a.length; i++) {
    if (smallestNumber > a[i]) {
      smallestNumber = a[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}
