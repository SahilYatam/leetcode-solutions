// 2294. Partition Array Such That Maximum Difference Is K

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    let sortedNums = nums.sort((a,b) => a-b)
    let totalGroup = 1

    let start = sortedNums[0]

    for(let i = 0; i < sortedNums.length; i++){
        if(sortedNums[i] - start <= k){
            continue
        } else {
            totalGroup++
            start = sortedNums[i]
        }
    }

    return totalGroup
};

let nums = [3,6,1,2,5], k = 2
// Output: 2

// let nums = [1,2,3], k = 1
// Output: 2

// let nums = [2,2,4,5], k = 0
// Output: 3

console.log(partitionArray(nums, k));

