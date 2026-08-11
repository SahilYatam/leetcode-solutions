// 347. Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
    let hashMap = new Map();
    let result = [];

    for (let num of nums) {
        hashMap.set(num, (hashMap.get(num) || 0) + 1);
    }

    let values = [];

    for (const [key, val] of hashMap.entries()) {
        values.push([key, val]);
    }

    values.sort((a, b) => b[1] - a[1]);

    for (let key of values.slice(0, k)) {
        result.push(key[0]);
    }

    return result;
};

let nums = [1, 1, 1, 2, 2, 3],
    k = 2;
// Output: [1,2]

// let nums = [1,2,1,2,1,2,3,1,3,2], k = 2
// Output: [1,2]

// let nums = [1], k = 1
// Output: [1]

console.log(topKFrequent(nums, k));
