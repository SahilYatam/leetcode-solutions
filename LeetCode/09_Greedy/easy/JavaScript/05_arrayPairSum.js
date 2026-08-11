// 561. Array Partition

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let sortedNums = nums.sort((a,b) => a-b)
    let n = sortedNums.length
    let maxSum = 0

    for(let i = 0; i < n; i+=2){
        maxSum = sortedNums[i] + maxSum
    }
    return maxSum
};

let nums = [1,4,3,2]
// Output: 4

// let nums = [6,2,6,5,1,2]
// Output: 9

console.log(arrayPairSum(nums))
