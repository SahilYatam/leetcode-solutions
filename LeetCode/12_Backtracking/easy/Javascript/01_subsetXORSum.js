// 1863. Sum of All Subset XOR Totals

/**
 * @param {number[]} nums
 * @return {number}
 */
const subsetXORSum = function(nums) {
    let answer = 0

    function backtrack(idx, currentXOR){
        if(idx === nums.length){
            answer += currentXOR
            return
        }

        // Take current element
        backtrack(idx + 1, currentXOR ^ nums[idx])

        // Skip current element
        backtrack(idx + 1, currentXOR)
    }

    backtrack(0, 0)

    return answer
};

let nums = [1,3]
// Output: 6

// let nums = [5,1,6]
// Output: 28

// let nums = [3,4,5,6,7,8]
// Output: 480

console.log(subsetXORSum(nums))