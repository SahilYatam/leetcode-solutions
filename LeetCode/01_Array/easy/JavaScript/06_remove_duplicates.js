/**
 * LeetCode Array Questin: 26. Remove Duplicates from Sorted Array
 * 
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.
 * 
 * 
 * Example 1:
 *  Input: nums = [1,1,2]
 *  Output: 2, nums = [1,2,_]
 *  Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).
 * 
 */


/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = (nums) => {
    let unique = [];

    for(let i = 0; i < nums.length; i++){
        if(!unique.includes(nums[i])){
            unique.push(nums[i]);
        }
    }

    for(let i = 0; i < unique.length; i++){
        nums[i] = unique[i];
    }

    return unique.length;
}

const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));


// Optimze version
/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicatesOptimze = (nums) => {
    if(nums.length === 0) return 0;

    let k = 1; // First element is always unique

    for(let i = 1; i < nums.length; i++){
        // Compare current element with previous element
        if(nums[i] !== nums[i-1]){
            nums[k] = nums[i]; // When current element is diffenet from previous element, then place it at position k
            k++; // Move k forward
        }
    }
    return k;
}

// const removeDuplicatesOptimze = (nums) => {
//     if (nums.length === 0) return 0;

//     let k = 1; // First element is always unique
//     console.log("Initial array:", nums);
//     console.log("Start: k =", k);

//     for (let i = 1; i < nums.length; i++) {
//         console.log(`\n👉 Iteration i = ${i}`);
//         console.log(`Compare nums[i] (${nums[i]}) with nums[i-1] (${nums[i - 1]})`);

//         if (nums[i] !== nums[i - 1]) {
//             nums[k] = nums[i];
//             console.log(`✅ Unique element found! Placing ${nums[i]} at index ${k}`);
//             k++;
//             console.log("Array now:", nums);
//         } else {
//             console.log(`❌ Duplicate found: ${nums[i]} is same as ${nums[i - 1]}`);
//         }
//     }

//     console.log("\nFinal array after removing duplicates:", nums);
//     console.log("Total unique elements (k):", k);
//     return k;
// };


console.log(removeDuplicatesOptimze(nums));
