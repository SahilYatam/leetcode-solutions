// 643. Maximum Average Subarray I

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const findMaxAverage = (nums, k) => {
    let maxSum ;
    let currentSum = 0;
    let left = 0;
    let right = k;

    let i = 0
    while(i < k ) {
        currentSum += nums[i]
        i++
    }
    maxSum = currentSum

    while(right < nums.length){
        currentSum = currentSum - nums[left];
        currentSum = currentSum + nums[right];

        maxSum = Math.max(maxSum, currentSum)

        left++
        right++
    }
    return maxSum / k
};

let nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// let nums = [5], k = 1
// Output: 5.00000

console.log(findMaxAverage(nums, k))