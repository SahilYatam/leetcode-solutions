// 1493. Longest Subarray of 1's After Deleting One Element

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function(nums) {
    let n = nums.length, zeroCount = 0, left = 0, answer = 0;

    for(let right = 0; right < n; right++){
        if(nums[right] === 0){
            zeroCount++
        }

        while(zeroCount > 1){
            if(nums[left] === 0){
                zeroCount--
            }
            left++
        }

        answer = Math.max(answer, right-left)
    }

    return answer
};

// let nums = [1,1,0,1]
// Output: 3

let nums = [0,1,1,1,0,1,1,0,1]
// Output: 5

// let nums = [1,1,1]
// Output: 2

console.log(longestSubarray(nums))

