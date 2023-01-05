# ts-sort ![npm](https://img.shields.io/npm/v/ts-sort)

## 🪄 Sorting Utilities!

### 📦 Installation:

```bash
npm install ts-sort
```

### ⚡️ Usage:

```ts
import { qsortRecur } from 'ts-sort';
```

### 💎 API:

The API covers the following methods:

| Method            | Type                    | Runtimes                                           |
| ----------------- | ----------------------- | -------------------------------------------------- |
| `qsortRecur`      | QuickSort Recursive     | T = O(n log n), S = O(1) -> [T: O(n^2) worst-case] |
| `qsortIter`       | QuickSort In-Place      | T = O(n log n), S = O(n) -> [T: O(n^2) worst-case] |
| `selSort`         | SelectionSort Recursive | T = O(n^2), S = O(n)                               |
| `selSortInplace`  | SelectionSort In-Place  | T = O(n^2), S = O(1)                               |
| `mergeSort`       | MergeSort               | T = O(n log(n)), S = O(n) {STABLE}                 |
| `bucketSort`      | BucketSort              | T = O(n+k), S = O(n+k) {STABLE}                    |
| `bubbleSort`      | BubbleSort              | T = O(n^2), S = O(1)                               |
| `insertionSort`   | InsertionSort           | T = O(n^2), S = O(1) {STABLE}                      |
| `radixSort`       | RadixSort               | T = O(d \* (n + max)), S = O(max) {STABLE}         |
| `countingSort`    | CountingSort            | T = O(n + max), S = O(max) {STABLE}                |
| `countingSortNeg` | CountingSort Negatives  | T = O(n + max), S = O(max) {STABLE}                |

### 🔑 License

[MIT](https://github.com/zero0rder/ts-sort/blob/master/LICENSE)
