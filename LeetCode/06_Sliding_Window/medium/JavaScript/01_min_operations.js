// 3191. Minimum Operations to Make Binary Array Elements Equal to One I

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let minOps = 0
    let n = nums.length

    for(let i = 0; i < n; i++){
        if(nums[i] === 0){
            if(i + 2 >= n){
                return -1
            }

            for(let k = i; k < i+3; k++){
                nums[k] = 1 - nums[k]
            }

            minOps++
        }

    }
    return minOps
};


let nums = [0,1,1,1,0,0]
// Output: 3

// let nums = [0,1,1,1]
// Output: -1

console.log(minOperations(nums))
