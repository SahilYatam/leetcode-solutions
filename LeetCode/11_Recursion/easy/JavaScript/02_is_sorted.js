/**
 * @param {number[]} arr 
 * @param {number} n 
 * @return {boolean} 
 */

function isSorted(arr, n){
    if(n === 0 || n === 1){
        return true
    }

    return arr[n-1] >= arr[n-2] && isSorted(arr, n-1)
}

let arr = [1, 2, 3, 5, 4]
console.log(isSorted(arr, arr.length))