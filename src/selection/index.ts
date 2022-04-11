/**
 *      Selection Sort Algorithm - O(n^2)
 */
function findSmallestIndex(array: number[]): number {
    let smallestNumber = array[0];
    let smallestIndex = 0;

    for (let i = 0; i < array.length; i++){
        if (smallestNumber > array[i]) {
            smallestNumber = array[i];
            smallestIndex = i;
        }
    }
    
    return smallestIndex;
}


export function ssort(array: number[]): number[]{
    let _sortedArray: number[] = [];

    while (array.length > 0) {
        let index = findSmallestIndex(array);
        _sortedArray.push(array.splice(index, 1)[0]);
    }

    return _sortedArray;
}