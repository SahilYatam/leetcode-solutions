/**
 * LeetCode Array Questin: 217. Contains Duplicate 
**/

/**
 * // Time complexity: O(n2)
 * Brute force Method
 * 
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (nums) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                return true;
            }
        }
    }
    return false;
}

const nums = [1,2,3,4,1];
console.log(containsDuplicate(nums))

const containsDuplicateOptimze = (nums) => {
    let set = new Set();

    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])){
            return true;
        }
        set.add(nums[i]);
    }

    return false;
}

console.log(containsDuplicateOptimze(nums))
