// 3689. Maximum Total Subarray Value I

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxTotalValue = function(nums, k) {
    let maxNum = Math.max(...nums)
    let minNum = Math.min(...nums)

    let val = maxNum - minNum

    return val * k
};

let nums = [1,3,2], k = 2
// Output: 4

// let nums = [4,2,5,1], k = 3
// Output: 12

console.log(maxTotalValue(nums, k))