// 594. Longest Harmonious Subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */

const findLHS = (nums) => {
    let freqMap = new Map()
    let countHS = 0;

    for(let i = 0; i < nums.length; i++){
        freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1)
    }

    for(const [x, count] of freqMap.entries()){
        if(freqMap.has(x + 1)){
            countHS = Math.max(countHS, count + freqMap.get(x+1))
        }
    }

    return countHS
};


let nums = [1,2,2,3,4,5,1,1,1,1]
// Output: 7

// let nums = [1,3,2,2,5,2,3,7]
// Output: 5

// let nums = [1,2,3,4]
// Output: 2

// let nums = [1,1,1,1]
// Output: 0

console.log(findLHS(nums))