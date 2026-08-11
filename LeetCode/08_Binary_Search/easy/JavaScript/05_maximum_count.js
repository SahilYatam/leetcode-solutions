// 2529. Maximum Count of Positive Integer and Negative Integer

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let sortNum = nums.sort((a, b) => a - b)
    let pNum = 0, nNum = 0

    for(let num of sortNum){
        if(num === 0){
            continue;
        }
        else if(num > 0){
            pNum++
        }
        else{
            nNum++
        }
    }
    return Math.max(pNum, nNum)
};

// let nums = [-2,-1,-1,1,2,3]
// Output: 3

// let nums = [-3,-2,-1,0,0,1,2]
// Output: 3

// let nums = [5,20,66,1314]
// Output: 4

console.log(maximumCount(nums))