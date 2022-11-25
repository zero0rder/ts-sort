/**
 *   Quick Sort Algorithm - T: O(n log n) | S: O(1) -> [T: O(n^2) worst-case]
 */

export function qsortRecursive(a: (number | string)[], l: number = 0, h: number = a.length - 1): (number | string)[] | undefined {
    if (l >= h) return

    let _pivot = partition(a, l, h)
    qsortRecursive(a, l, _pivot - 1)
    qsortRecursive(a, _pivot + 1, h)
}

export function qsortIterative(a: (number | string)[]): (number | string)[] | undefined {
    let stack: number[] = []

    //-> initialize entire array
    stack.push(0)
    stack.push(a.length - 1)

    // The loop repeats as long as we have unsorted subarrays
    while(stack[stack.length - 1] >= 0){
        // Extracting the top unsorted subarray
    	let h = stack.pop(), l = stack.pop()
        
        if (l === undefined || h === undefined) return

        let pivotIndex = partition(a, l, h)
        
        // If there are unsorted elements to the "left" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if ((pivotIndex - 1) > l){
        	stack.push(l)
            stack.push(pivotIndex - 1)
		}
        
        // If there are unsorted elements to the "right" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if ((pivotIndex + 1) < h){
        	stack.push(pivotIndex + 1)
            stack.push(h)
        }
    }

    return a
}

function partition(a: (number | string)[], l: number, h: number): number {
    let ptr = l - 1

    for (let j = l; j <= h; j++) {
        if (a[j] < a[h]) {
            ptr++
            [a[j], a[ptr]] = [a[ptr], a[j]]
        }
    }
    
    // insert pivot into middle of array
    [a[ptr + 1], a[h]] = [a[h], a[ptr + 1]]

    // return pivot index
    return ptr + 1
}