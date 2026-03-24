/**
 * Dificulty: Medium
 * 334. Increasing Triplet Subsequence
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = (nums) => {
    let first = Infinity;
    let second = Infinity;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] < first){
            first = nums[i]
        } else if(nums[i] > first && nums[i] < second){
            second = nums[i]
        } else if(nums[i] > second){
            return true
        }
    }
    return false
};

// let nums = [1,2,3,4,5]
// Output: true

let nums = [0,4,2,1,0,-1,-3]
// Output: false

// let nums = [5,4,3,2,1]
// Output: false

// let nums = [2,1,5,0,4,6]
// Output: true
console.log(increasingTriplet(nums))