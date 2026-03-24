/**
 * LeetCode Array Questin: 1. Two Sum
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * You can return the answer in any order.
 */

const nums = [3,2,4];
const target = 6;

// Time complexity: O(n2)
// Brute force method

/**
 * @param {number[]} nums
 * @param {Number} target 
 * @returns {number[]}
 */
function twoSum (nums, target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(target === nums[i] + nums[j]){
                return [i, j]
            }
        }
    }
    return []
}

console.log(twoSum(nums, target))

/**
 * // Time complexity: O(n)
 * @param {number[]} nums
 * @param {Number} target 
 * @returns {number[]}
 */

function sum (nums, target){
    // Create a HashMap to store numbers and their indices
    let map = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++){
        // Calculate the complement of the current number (get the reminder)
        let complement = target - nums[i];

        // Check if the complement is already in the map
        if(map.has(complement)){
            // If found, return the indices of the complement and current number
            return [map.get(complement), i];
        }
        // Otherwise, add the current number and its index to the map
        [map.set(nums[i], i)];
    }
    // Return an empty array if no solution is found 
    return [];
}

console.log(sum(nums, target))