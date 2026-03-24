// 1984. Minimum Difference Between Highest and Lowest of K Scores

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const minimumDifference = (nums, k) => {
    const sortedNums = nums.sort((a, b) => a - b);

    let left = 0;
    let right = k - 1;

    let minDifference = sortedNums[right] - sortedNums[left]

    left++
    right++

    while(right < sortedNums.length){
        const currentDifference = sortedNums[right] - sortedNums[left]
        minDifference = Math.min(minDifference, currentDifference)
        left++
        right++
    }
    
    return minDifference
};

// let nums = [9,4,1,7], k = 2
// Output: 2

let nums = [10,20,30,100,200,300,1000], k = 3
// Output: 20

// let nums = [90], k = 1
//  Output: 0

// Explanation: There are six ways to pick score(s) of two students:
//  - [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
//  - [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
//  - [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
//  - [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
//  - [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
//  - [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
// The minimum possible difference is 2.

console.log(minimumDifference(nums, k))