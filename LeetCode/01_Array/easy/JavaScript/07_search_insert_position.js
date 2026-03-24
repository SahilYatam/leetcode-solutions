/**
 * LeetCode question: 35. Search Insert Position
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = (nums, target) => {
    let left = 0;
    let right = nums.length -1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2); // Find middle

        if(nums[mid] === target){
            return mid;
        } else if (nums[mid] < target){
            left = mid + 1;
        } else {
            right = mid -1;
        }

    }
    return left;
}

const nums = [1,3,5,6];
const target = 2;

console.log(searchInsert(nums, target));