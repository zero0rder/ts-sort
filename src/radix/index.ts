/**
 *  RADIX SORT: T = O(d * (n + max)), S = O(max) {STABLE}
 */

export function radixSort(a: number[]): void {
  const max = Math.max(...a);

  for (let i = 1; Math.floor(max / i) > 0; i *= 10) {
    radixCountingSort(a, i);
  }
}

function radixCountingSort(a: number[], idx: number): void {
  const max = Math.max(...a);
  const freq = new Array(max + 1).fill(0);
  const outputA = new Array(a.length + 1).fill(0);

  for (const elem of a) {
    freq[Math.floor(elem / idx) % 10]++;
  }

  for (let n = 1; n < 10; n++) {
    freq[n] += freq[n - 1];
  }

  for (let j = a.length - 1; j >= 0; j--) {
    outputA[freq[Math.floor(a[j] / idx) % 10] - 1] = a[j];
    freq[Math.floor(a[j] / idx) % 10]--;
  }

  for (let m = 0; m < a.length; m++) {
    a[m] = outputA[m];
  }
}
