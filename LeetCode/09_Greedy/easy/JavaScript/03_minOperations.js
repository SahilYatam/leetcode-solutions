// 1827. Minimum Operations to Make the Array Increasing

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let minOps = 0

    for(let i = 1; i < nums.length; i++){
        if(nums[i] <= nums[i-1]){
            let required = nums[i-1] + 1
            // “This line counts how many +1 pushes are needed to make the current element just valid.”
            minOps += (required - nums[i])
            nums[i] = required
        }
    }

    return minOps
};

// let nums = [1,1,1]
// Output: 3

let nums = [1,5,2,4,1]
// Output: 14

// let nums = [8]
// Output: 0

console.log(minOperations(nums))
