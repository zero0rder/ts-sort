/**
 *      Quick Sort Algorithm - O(n log n) --(D&C)
 */
export function qsortRecursive(array: number[], low: number = 0, high: number = array.length - 1): number[] | undefined {
    if (low >= high)
        return;

    let _pivot = partition(array, low, high);

    qsortRecursive(array, low, _pivot - 1);
    qsortRecursive(array, _pivot + 1, high);

};

export function qsortIterative(array: number[]): number[] | undefined {
    // Creating an array that we'll use as a stack
    let stack: number[] = [];
    
    // Adding the entire initial array as an "unsorted subarray"
    stack.push(0);
    stack.push(array.length - 1);

    // There isn't an explicit peek() function
    // The loop repeats as long as we have unsorted subarrays
    while(stack[stack.length - 1] >= 0){
        // Extracting the top unsorted subarray
    	let high = stack.pop();
        let low = stack.pop();
        
        if (low === undefined || high === undefined) return;

        let pivotIndex = partition(array, low, high);
        
        // If there are unsorted elements to the "left" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if ((pivotIndex - 1) > low){
        	stack.push(low);
            stack.push(pivotIndex - 1);
		}
        
        // If there are unsorted elements to the "right" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if ((pivotIndex + 1) < high){
        	stack.push(pivotIndex + 1);
            stack.push(high);
        }
    }

    return array;
}

function partition(array: number[], low: number, high: number): number {
    let pointer = low - 1;

    for (let j = low; j <= high; j++) {
        if (array[j] < array[high]) {
            pointer++;
            [array[j], array[pointer]] = [array[pointer], array[j]];
        }
    }
    
    // insert pivot into middle of array
    [array[pointer + 1], array[high]] = [array[high], array[pointer + 1]];

    // return pivot index
    return pointer + 1;
}