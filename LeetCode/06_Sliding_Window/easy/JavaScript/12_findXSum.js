// 3318. Find X-Sum of All K-Long Subarrays I

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
    let n = nums.length;
    let result = [];

    for (let i = 0; i < n - k + 1; i++) {
        let window = nums.slice(i, i+k)

        let freq = new Map()
        for(let num of window){
            if(freq.has(num)){
                freq.set(num, freq.get(num) + 1)
            } else {
                freq.set(num, 1)
            }
        }

        let items = Array.from(freq.entries())
        
        items.sort((a, b) => {
            if(b[1] !== a[1]) return b[1] - a[1]; // freq
            return b[0] - a[0]; // value
        })

        let selected = new Set()
        for(let j = 0; j < Math.min(x, items.length); j++){
            selected.add(items[j][0])
        }

        let sum = 0
        for(let num of window){
            if (selected.has(num)){
                sum += num
            }
        }

        result.push(sum)
    }
    return result;
};

let nums = [1, 1, 2, 2, 3, 4, 2, 3],
    k = 6,
    x = 2;
// Output: [6,10,12]

// let nums = [3,8,7,8,7,5], k = 2, x = 2
// Output: [11,15,15,15,12]

console.log(findXSum(nums, k, x))
