// 2824. Count Pairs Whose Sum is Less than Target

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let arr = nums.sort((a, b) => a - b);

    let left = 0, right = arr.length -1;
    
    let pairs = 0

    while(left < right){
        if(arr[left] + arr[right] < target){
            pairs += (right - left)
            left++
        }
        else {
            right--
        }
    }
    
    return pairs
};

let nums = [-1,1,2,3,1], target = 2
// Output: 3

// let nums = [-6,2,5,-2,-7,-1,3], target = -2
// Output: 10

// let nums = [-6,2,5,-2,-7,-1,3], target = -2
// Output: 10

console.log(countPairs(nums, target))
