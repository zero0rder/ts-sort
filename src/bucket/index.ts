/**
 *  BUCKET SORT: T = O(n+k), S = O(n+k) {STABLE}
 */

export function bucketSort(a: number[], bucketSize: number = 5): number[] | void {
  const buckets: number[][] = [];
  const outputA: number[] = [];
  const max = Math.max(...a);
  const min = Math.min(...a);
  const range = Math.floor((max - min) / bucketSize);

  if (bucketSize === 0) return;

  let p = 0;
  while (p < bucketSize) {
    buckets.push([]);
    p++;
  }

  for (const elem of a) {
    const bucketIndex: number = Math.floor((elem - min) / (range + 1));
    buckets[bucketIndex].push(elem);
  }

  buckets
    .map((bkt) => {
      if (bkt.length > 0) bkt.sort((x, y) => x - y);
      return bkt;
    })
    .forEach((srtbkt) => outputA.push(...srtbkt));

  return outputA;
}
