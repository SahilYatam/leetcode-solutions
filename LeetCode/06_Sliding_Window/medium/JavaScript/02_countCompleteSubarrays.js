// 2799. Count Complete Subarrays in an Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
    let set = new Set(nums);
    let totalDistinct = set.size;

    let freqMap = new Map();
    let n = nums.length;

    let left = 0,
        count = 0;

    for (let right = 0; right < n; right++) {
        freqMap.set(nums[right], (freqMap.get(nums[right]) || 0) + 1);

        while (freqMap.size === totalDistinct) {
            count += n - right;

            freqMap.set(nums[left], (freqMap.get(nums[left]) || 0) - 1);

            if (freqMap.get(nums[left]) === 0) {
                freqMap.delete(nums[left]);
            }

            left++;
        }
    }

    return count;
};

let nums = [1, 3, 1, 2, 2];
// Output: 4

// let nums = [5,5,5,5]
// Output: 10

console.log(countCompleteSubarrays(nums));
