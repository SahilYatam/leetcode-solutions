// 1877. Minimize Maximum Pair Sum in Array


/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let sortedNums = nums.sort((a,b) => a-b);
    let low = 0, high = nums.length -1;
    let maxNum = 0;

    while(low < high){
        let currMaxNum = sortedNums[low] + sortedNums[high];
        maxNum = Math.max(currMaxNum, maxNum)
        
        low++
        high--
    }

    return maxNum
};

let nums = [3,5,2,3]
// Output: 7

// let nums = [3,5,4,2,4,6]
// Output: 8

console.log(minPairSum(nums))
