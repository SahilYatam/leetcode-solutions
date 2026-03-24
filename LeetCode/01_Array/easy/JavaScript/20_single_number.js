/**
 * LeetCode question: 136. Single Number
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length === 1) return nums[0];
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], 1)
        } else {
            let val = map.get(nums[i])
            map.set(nums[i], val + 1)
        }
    }
    for(const [key, val] of map.entries()){
        if(val === 1){
            return key
        }
    }
};

const nums = [2]
console.log(singleNumber(nums))