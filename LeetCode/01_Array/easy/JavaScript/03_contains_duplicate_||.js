/**
 * LeetCode Array Questin: 219. Contains Duplicate II
 * 
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 * 
 * Example 1:
 *  Input: nums = [1,2,3,1], k = 3
 *  Output: true
 * 
 * Example 1:
 *  Input: nums = [1,0,1,1], k = 1
 *  Output: true
 * 
 * Example 3:
 *  Input: nums = [1,2,3,1,2,3], k = 2
 *  Output: false
 * 
 * Example 4:
 *  Input: nums = [0, 1, 2, 3, 4], k = 2
 *  Output: false
 * 
 */

/**
 * 🧩 Problem Restatement (in plain English)

You’re given:

An array of integers → nums

An integer → k

You need to determine if any two equal numbers in the array appear within k indices of each other.

Formally:

Are there two indices i and j such that:

nums[i] == nums[j]

and |i - j| <= k

If yes → return true
If no → return false
 */

// Brute Force Method

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 */

const containsNearbyDuplicate = (nums, k) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                if(j - i <= k){
                    return true;
                }
            }
        }
    }
    return false;
}

/**
 * 🔍 Problem was that previou code
 * if (i - j <= k)
 * i - j can be negative, because j is always greater than i.
 * 
 * So if you have:
 * i = 0, j = 3 → i - j = -3
 * 
 * Then -3 <= k will always be true for positive k,
 * even when the distance is actually too far.
 * 
 * Correct logic
 * It should be:
 * if (Math.abs(i - j) <= k)
 * Or
 * if (j - i <= k)
 */
const nums = [1,2,3,1,2,3]
const k = 2

console.log(containsNearbyDuplicate(nums, k));


// optimzie version

/**
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @returns {boolean}
 */

const containsNearbyDuplicateOptimize = (nums, k) => {
    let set = new Set();

    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])) return true;
        set.add(nums[i]);
        if(set.size > k){
            set.delete(nums[i - k]);
        }
    }
    return false;
}

console.log(containsNearbyDuplicateOptimize(nums, k));
