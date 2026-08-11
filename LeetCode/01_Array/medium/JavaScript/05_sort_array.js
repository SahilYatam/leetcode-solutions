// 912. Sort an Array

// Merge
const merge = (arr, st, mid, end) => { // O(n) 
    let temp = []
    let i = st, j = mid+1

    while(i <= mid && j <= end){
        if(arr[i] <= arr[j]){
            temp.push(arr[i])
            i++
        } else {
            temp.push(arr[j])
            j++
        }
    }

    while(i <= mid){
        temp.push(arr[i]);
        i++
    }

    while(j <= end){
        temp.push(arr[j])
        j++
    }

    for(let idx = 0; idx < temp.length; idx++){
        arr[idx + st] = temp[idx]
    }
}

// Merge sort
const mergeSort = (arr, st, end) => {
    if (st < end) {
        let mid = Math.floor(st + (end - st) / 2)

        mergeSort(arr, st, mid) // Left half
        mergeSort(arr, mid + 1, end) // Right half

        merge(arr, st, mid, end);
    }
}


/**
 * @param {number[]} nums
 * @return {number[]}
 */

const sortArray = (nums) => {
    let st = 0
    let end = nums.length - 1
    mergeSort(nums, st, end)

    return nums
}


/**
// bubble sort
const sortArray = (nums) => {
    let n = nums.length
    for(let i = 0; i < n; i++){
        let swapped = false

        for(let j = 0; j < n-i-1; j++){
            if(nums[j] > nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
                swapped = true
            }
        }

        if(!swapped) break;
    }
    return nums
};
 */
// let nums = [5,2,3,1]
// Output: [1,2,3,5]

let nums = [5, 1, 1, 2, 0, 0]
// Output: [0,0,1,1,2,5]

console.log(sortArray(nums));