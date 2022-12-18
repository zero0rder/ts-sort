/**
 *   Quick Sort Recursive - T: O(n log n), S: O(1) -> [T: O(n^2) worst-case]
 */
export function qsortRecur(
  a: (number | string)[],
  l: number = 0,
  h: number = a.length - 1,
): (number | string)[] | undefined {
  if (l >= h) return;

  const _pivot = partition(a, l, h);
  qsortRecur(a, l, _pivot - 1);
  qsortRecur(a, _pivot + 1, h);
}

/**
 *   Quick Sort Iterative - T: O(n log n), S: O(n) -> [T: O(n^2) worst-case]
 */
export function qsortIter(a: (number | string)[]): (number | string)[] | undefined {
  const stack: number[] = [];

  stack.push(0);
  stack.push(a.length - 1);

  while (stack[stack.length - 1] >= 0) {
    const h = stack.pop();
    const l = stack.pop();

    if (l === undefined || h === undefined) return;

    const pivotIndex = partition(a, l, h);

    if (pivotIndex - 1 > l) {
      stack.push(l);
      stack.push(pivotIndex - 1);
    }

    if (pivotIndex + 1 < h) {
      stack.push(pivotIndex + 1);
      stack.push(h);
    }
  }

  return a;
}

function partition(a: (number | string)[], l: number, h: number): number {
  let ptr = l - 1;

  for (let j = l; j <= h; j++) {
    if (a[j] < a[h]) {
      ptr++;
      [a[j], a[ptr]] = [a[ptr], a[j]];
    }
  }

  [a[ptr + 1], a[h]] = [a[h], a[ptr + 1]];

  return ptr + 1;
}
