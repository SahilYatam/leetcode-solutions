// 2760. Longest Even Odd Subarray With Threshold

/**
 *
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */

// const longestAlternatingSubarray = (nums, threshold) => {
//     let currentLength;
//     let maxLength = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0 && nums[i] <= threshold) {
//             currentLength = 1;

//             let j = i + 1;
//             while (j < nums.length) {
//                 if (nums[j] <= threshold && nums[j] % 2 !== nums[j - 1] % 2) {
//                     currentLength++;
//                     j++;
//                 } else {
//                     break;
//                 }
//             }
//             maxLength = Math.max(maxLength, currentLength);
//         }
//     }
//     return maxLength;
// };

const longestAlternatingSubarray = (nums, threshold) => {
    let currentLength = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > threshold){
            currentLength = 0
        } 
        else if(currentLength > 0 && nums[i] % 2 !== nums[i-1] % 2){
            currentLength++
        }
        else if(nums[i] % 2 === 0){
            currentLength=1
        } 
        else {
            currentLength = 0
        }

        maxLength = Math.max(maxLength, currentLength)
    }
    return maxLength;
};

let nums = [3, 2, 5, 4],
    threshold = 5;
// Output: 3

// let nums = [1,2], threshold = 2
//  Output: 1

// let nums = [2,3,4,5], threshold = 4
// Output: 3

console.log(longestAlternatingSubarray(nums, threshold));
