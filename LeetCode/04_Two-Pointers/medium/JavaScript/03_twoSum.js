// 167. Two Sum II - Input Array Is Sorted

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0,
            right = numbers.length - 1;
        while (left < right) {
            let sum = numbers[left] + numbers[right];
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                return [left + 1, right + 1];
            }
        }

        return [];
    }
}

let numbers = [2, 7, 11, 15],
    target = 9;
// Output: [1,2]

// let numbers = [2,3,4], target = 6
// Output: [1,3]

let sol = new Solution();
let result = sol.twoSum(numbers, target);
console.log(result);
