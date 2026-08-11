// 3300. Minimum Element After Replacement With Digit Sum

/**
 * @param {number[]} nums
 * @return {number}
 */
const minElement = function(nums) {
    let arr = []

    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        let digit_sum = 0

        while(num > 0){
            let digit = num % 10
            digit_sum += digit

            num = Math.floor(num / 10)
        }
        arr.push(digit_sum)
    }

    return Math.min(...arr)
};

// let nums = [10,12,13,14]
// Output: 1

// let nums = [1,2,3,4]
// Output: 1

let nums = [999,19,199]
// Output: 10

console.log(minElement(nums))
