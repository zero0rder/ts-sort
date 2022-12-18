/**
 *  COUNTING SORT: T = O(n + max), S = O(max) {STABLE}
 */

export function countingSort(a: number[]): number[] {
  const max = Math.max(...a);
  const temp = new Array(max + 1).fill(0);
  const outputA = new Array(a.length).fill(0);

  for (const elem of a) {
    temp[elem]++;
  }

  for (let n = 1; n < temp.length; n++) {
    temp[n] += temp[n - 1];
  }

  for (let j = a.length - 1; j >= 0; j--) {
    outputA[temp[a[j]] - 1] = a[j];
    temp[a[j]]--;
  }

  return outputA;
}

/**
 *  COUNTING SORT: T = O(n + max), S = O(max) {STABLE}
 */

export function countingSortNeg(a: number[]): number[] {
  const max = Math.max(...a);
  const min = Math.min(...a);
  const range = max - min + 1;
  const count = new Array(range).fill(0);
  const output = new Array(a.length).fill(0);

  for (const elem of a) {
    count[elem - min]++;
  }

  for (let n = 1; n < count.length; n++) {
    count[n] += count[n - 1];
  }

  for (let j = a.length - 1; j >= 0; j--) {
    output[count[a[j] - min] - 1] = a[j];
    count[a[j] - min]--;
  }

  return output;
}
