// 3194. Minimum Average of Smallest and Largest Elements

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumAverage = function(nums) {
    let sortedNums = nums.sort((a,b) => a-b);
    let avg = []

    let left = 0, right = sortedNums.length -1;

    while(left < right){
        avg.push((sortedNums[left] + sortedNums[right]) / 2)
        left++
        right--
    }

    return Math.min(...avg)
};

let nums = [7,8,3,4,15,13,4,1]
// Output: 5.5

// let nums = [1,9,8,3,10,5]
// Output: 5.5

// let nums = [1,2,3,7,8,9]
// Output: 5.0

console.log(minimumAverage(nums))
