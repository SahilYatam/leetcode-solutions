// 90. Subsets II

/**
 * @param {number[]} nums
 * @param {number[]} ans
 * @param {number} i
 * @param {number[][]} allSubsets
 */

const getAllSubsets = (nums, ans, i, allSubsets) => {
    if(i === nums.length) {
        allSubsets.push(ans.slice())
        return
    }

    // include
    ans.push(nums[i])
    getAllSubsets(nums, ans, i+1, allSubsets)

    ans.pop()

    let idx = i+1
    while(idx < nums.length && nums[idx] == nums[idx-1]){
        idx++
    }
    // exclude
    getAllSubsets(nums, ans, idx, allSubsets)
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function(nums) {
    let sortedNums = nums.sort((a, b) => a-b);

    let allSubsets = [], ans = [];

    getAllSubsets(sortedNums, ans, 0, allSubsets);

    return allSubsets
};

let nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

let result = subsetsWithDup(nums)

for(let val of result){
    console.log(val)
}

