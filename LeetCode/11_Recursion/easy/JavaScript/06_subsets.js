// 78. Subsets

const getAllSubsets = (nums, ans, i, allSubsets) => {
    if(i === nums.length){
        allSubsets.push(ans.slice())
        return
    }

    // include
    ans.push(nums[i])
    getAllSubsets(nums, ans, i+1, allSubsets)

    // exclude
    ans.pop() // backtrack
    getAllSubsets(nums, ans, i+1, allSubsets)
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    let allSubsets = [], ans = [];

    getAllSubsets(nums, ans, 0, allSubsets)

    return allSubsets
};

let nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// let nums = [0]
// Output: [[],[0]]

console.log(subsets(nums))
