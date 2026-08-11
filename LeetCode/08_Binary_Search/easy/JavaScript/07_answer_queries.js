// 2389. Longest Subsequence With Limited Sum

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
    let sortedNums = nums.sort((a, b) => a - b);
    let n = sortedNums.length;

    let prefixSum = Array(n).fill(0);
    prefixSum[0] = sortedNums[0];

    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + sortedNums[i];
    }

    let result = [];

    for (let i = 0; i < queries.length; i++) {
        let st = 0,
            end = prefixSum.length - 1;
        let best = -1;

        while (st <= end) {
            let mid = Math.floor(st + (end - st) / 2);

            if (prefixSum[mid] <= queries[i]) {
                best = mid;
                st = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        if (best === -1) {
            result.push(0);
        } else {
            result.push(best + 1);
        }
    }
    return result;
};

// let nums = [4,5,2,1], queries = [3,10,21]
// Output: [2,3,4]

let nums = [2, 3, 4, 5],
    queries = [1];
// Output: [0]

console.log(answerQueries(nums, queries));
