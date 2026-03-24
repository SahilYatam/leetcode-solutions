// 228. Summary Ranges

/**
 * @param {number[]} nums
 * @return {string[]}
 */

const summaryRanges = (nums) => {
    if (nums.length === 0) return [];
    if (nums.length === 1) return [nums[0].toString()];

    let result = []

    let rangeStart = nums[0]

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            let rangeEnd = nums[i];

            result.push([rangeStart, rangeEnd])
            rangeStart = nums[i + 1]
        }
    }

    result.push([rangeStart, nums[nums.length - 1]]);

    // string format
    return result.map(range => {
        if (range[0] === range[1]) {
            return `${range[0]}`
        }
        return `${range[0]}->${range[1]}`
    })
};

let nums = [0, 1, 2, 4, 5, 7]
// Output: ["0->2","4->5","7"]

// let nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]

console.log(summaryRanges(nums))