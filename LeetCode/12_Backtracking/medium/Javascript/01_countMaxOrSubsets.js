// 2044. Count Number of Maximum Bitwise-OR Subsets

/**
 * @param {number[]} nums
 * @return {number}
 */
const countMaxOrSubsets = function(nums) {
    let maxOR = 0

    for(let num of nums){
        maxOR |= num
    }
    let count = 0

    function backtrack(idx, currentOR){

        if(idx === nums.length){
            if(currentOR === maxOR){
                count++
            }
            return
        }
        // Take current element
        backtrack(idx+1, currentOR | nums[idx])

        // Skip current element
        backtrack(idx+1, currentOR)
    }

    backtrack(0, 0)

    return count
};

let nums = [3,1]
// Output: 2

// let nums = [2,2,2]
// Output: 7

// let nums = [3,2,1,5]
// Output: 6

console.log(countMaxOrSubsets(nums))
