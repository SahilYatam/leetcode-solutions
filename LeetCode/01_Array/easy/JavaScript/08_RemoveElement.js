/**
 * LeetCode question: 27. Remove Element
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = (nums, val) => {
    // k tracks the next write position for valid elements
    let k = 0;
    for (let i = 0; i < nums.length; i++){
        // keep only elements that do not match `val`
        if(nums[i] !== val){
            nums[k] = nums[i];
            k++
        }
    }
    // number of elements retained
    return k;
}

const nums = [0,1,2,2,3,0,4,2]
const val = 2;

console.log(removeElement(nums, val));