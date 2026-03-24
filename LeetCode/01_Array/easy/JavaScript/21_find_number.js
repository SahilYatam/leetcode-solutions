// 448. Find All Numbers Disappeared in an Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
    let map = new Map();
    let result = [];

    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], i)
    }

    for(let i = 1; i < nums.length+1; i++){
        if(!map.has(i)){
            result.push(i)
        }
    }

    return result;
};

// let nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

let nums = [1,1]
// Output: [2]
console.log(findDisappearedNumbers(nums))