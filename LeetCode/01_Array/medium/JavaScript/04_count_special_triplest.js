/**
 * LeetCode question: 3583. Count Special Triplets
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
/*
const specialTriplets = (nums) => {
    if(nums.length < 3) return 0;

    let count = 0;

    for(let i = 0; i <= nums.length -3; i++){
        for(let j = i+1; j <= nums.length -2; j++){
            for(let k = j+1; k <= nums.length -1; k++){
                if(nums[i] === nums[j] * 2 && nums[k] === nums[j] * 2){
                    count++;
                }
            }
        }
    }

    return count % (10**9 + 7)

};
*/

const specialTriplets = (nums) => {
    const n = nums.length;
    if (n < 3) return 0;
    
    const MOD = 10**9 + 7;
    let result = 0;
    
    // Step 1: Build "afterMap" - frequency of all elements AFTER each position
    // We'll use this to know what elements exist after j
    const afterMap = new Map();
    
    // Initially, put ALL elements in afterMap (except first one)
    for (let i = 1; i < n; i++) {
        afterMap.set(nums[i], (afterMap.get(nums[i]) || 0) + 1);
    }
    
    // Step 2: Build "beforeMap" as we iterate
    const beforeMap = new Map();
    
    // Step 3: Iterate through each position as 'j' (middle element)
    for (let j = 0; j < n; j++) {
        // Remove nums[j] from afterMap because we're at position j now
        // (it's no longer "after" j, it IS j)
        if (j > 0) {
            const count = afterMap.get(nums[j]) || 0;
            if (count === 1) {
                afterMap.delete(nums[j]);
            } else {
                afterMap.set(nums[j], count - 1);
            }
        }
        
        // What value are we looking for as i and k?
        const target = nums[j] * 2;
        
        // Count of valid i's (elements BEFORE j that equal target)
        const countBefore = beforeMap.get(target) || 0;
        
        // Count of valid k's (elements AFTER j that equal target)
        const countAfter = afterMap.get(target) || 0;
        
        // Multiply: each combination of (i, j, k) is valid
        result = (result + countBefore * countAfter) % MOD;
        
        // Add current nums[j] to beforeMap for next iterations
        beforeMap.set(nums[j], (beforeMap.get(nums[j]) || 0) + 1);
    }
    
    return result;
};
let nums = [6,3,6]
console.log(specialTriplets(nums))