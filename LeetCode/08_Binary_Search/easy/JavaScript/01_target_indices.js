// 2089. Find Target Indices After Sorting Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const targetIndices = (nums, target) => {
    let arr = nums.sort((a, b) => a - b)

    let st = 0
    let end = arr.length -1
    let first = -1

    while(st <= end) {
        let mid = st + Math.floor((end - st) / 2)

        if(target > arr[mid]){
            st = mid + 1
        }
        else if(target < arr[mid]){
            end = mid - 1
        }
        else{
            first = mid
            end = mid - 1
        }
    }

    if(first === -1) return [];
    console.log("First:", first)

    let result = []
    let i = first

    while(i < arr.length && arr[i] === target){
        result.push(i)
        i++
    }

    return result
};

let nums = [1,2,5,2,3], target = 2
// Output: [1,2]

// let nums = [1,2,5,2,3], target = 3
// Output: [3]

// let nums = [1,2,5,2,3], target = 5
// Output: [4]

console.log(targetIndices(nums, target))