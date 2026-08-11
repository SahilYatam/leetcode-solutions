// 1248. Count Number of Nice Subarrays

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numberOfSubarrays = function(nums, k) {
    let left = 0, n = nums.length;
    let oddCount = 0, answer = 0, leadingEvens = 0;

    for(let right = 0; right < n; right++){
        if(nums[right] % 2 !== 0){
            oddCount += 1
            leadingEvens = 0
        }
        
        while(oddCount > k){
            if(nums[left] % 2 !== 0){
                oddCount -= 1
            }
            left++
        }

        while(oddCount === k && nums[left] % 2 === 0){
            leadingEvens++
            left++
        }

        if(oddCount === k){
            answer += leadingEvens + 1
        }

    }

    return answer
};

// let nums = [1,1,2,1,1], k = 3
// Output: 2

// let nums = [2,4,6], k = 1
// Output: 0

let nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// Output: 16

console.log(numberOfSubarrays(nums, k))

