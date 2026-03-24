/**
 * Dificulty: Medium
 * 238. Product of Array Except Self
 */

// NOTE:
/**
 * The Pattern to Remember:
"Prefix and Suffix Products"
When you need to compute something about "all elements except current":

Build prefix array (cumulative from left)
Build suffix array (cumulative from right)
Combine them!
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    let answer = []

    let product = 1;
    for(let i = 0; i < nums.length; i++){
        answer[i] = product;
        product = product * nums[i]
    }

    product = 1
    for(let i = nums.length - 1; i >= 0; i--){
        answer[i] = answer[i] * product
        product = product * nums[i]
    }
    
    return answer
};

// let nums = [1,2,3,4]
// Output: [24,12,8,6]
let nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
console.log(productExceptSelf(nums));


// Old version:

/*
const productExceptSelf = (nums) => {
    let leftProducts = []
    let rightProducts = []
    
    let product = 1;
    let answer = []

    for(let i = 0; i < nums.length; i++){
        leftProducts[i] = product;
        product = product * nums[i]
        answer[i] = leftProducts[i]
    }
    product = 1
    for(let i = nums.length - 1; i >= 0; i--){
        rightProducts[i] = product;
        product = product * nums[i]
        answer[i]  = answer[i] * rightProducts[i]
    }
    
    return answer
};
*/
