// 3701. Compute Alternating Sum

/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    let sum = 0

    for(let i = 0; i < nums.length; i++){
        if(i % 2 == 0){
            sum += nums[i]
        } else {
            sum -= nums[i]
        }
    }
    return sum
};

let nums = [1,3,5,7]
// Output: -4

// let nums = [100]
// Output: 100

console.log(alternatingSum(nums))

