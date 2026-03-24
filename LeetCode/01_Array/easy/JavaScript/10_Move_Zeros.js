/**
 * LeetCode question: 283. Move Zeroes
 */

/**
 * @param {number[]} nums
 * @return {number[]} 
 */

const moveZeroes = (nums) => {
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[k] = nums[i]
            k++
        }
    }
    console.log(nums)
    console.log(k)
    for(let j = k; j < nums.length; j++){
        nums[j] = 0
    }
    return nums
}

const nums = [0,2,0,4,12];
console.log(moveZeroes(nums));

