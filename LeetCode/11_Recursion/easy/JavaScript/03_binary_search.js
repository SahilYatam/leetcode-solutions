// 704. Binary Search
function binarySearch(arr, target, st, end){
    if(st <= end){
        let mid = Math.floor(st+(end-st) / 2)
        
        if(arr[mid] === target) return mid;

        else if(arr[mid] <= target) return binarySearch(arr, target, mid+1, end);
        else return binarySearch(arr, target, st, mid-1);
    }
    return -1
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
    return binarySearch(arr, target, 0, arr.length-1)
};

let nums = [-1,0,3,5,9,12], target = 9
// Output: 4

// let nums = [-1,0,3,5,9,12], target = 2
// Output: -1

console.log(search(nums, target))