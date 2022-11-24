/**
 *      Selection Sort Algorithm - O(n^2)
 */

function findSmallestIndex(a: number[]): number {
    let smallestNumber = a[0], smallestIndex = 0

    for (let i = 0; i < a.length; i++){
        if (smallestNumber > a[i]) {
            smallestNumber = a[i]
            smallestIndex = i
        }
    }
    
    return smallestIndex
}

//-> O(n) - Space
export function ssort(a: number[]): number[]{
    let _sortedA: number[] = []
    
    while (a.length > 0) {
        _sortedA.push(a.splice(findSmallestIndex(a), 1)[0])
    }

    return _sortedA
}

//-> O(1) - Space
export function ssortInplace(a: number[]): number[]{
    for(let i = 0; i < a.length - 1; i++){
        let j = i + 1

        while (j < a.length) {
            if(a[i] > a[j]){[a[i], a[j]] = [a[j], a[i]]}
            j++
        }
    }

    return a
}