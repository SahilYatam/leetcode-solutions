/**
 * 268. Missing Number
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    let set = new Set(nums)

    for(let i = 0; i <= nums.length; i++){
        if(!set.has(i)){
            return i
        }
    }
    console.log("length:", nums.length)
};

const nums = [0,1]
console.log(missingNumber(nums))