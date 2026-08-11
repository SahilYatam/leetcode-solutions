// 2161. Partition Array According to Given Pivot

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
const pivotArray = function(nums, pivot) {
    let smallerGrp = [], equalGrp = [], biggerGrp = [];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] < pivot){
            smallerGrp.push(nums[i])
        }
        else if(nums[i] > pivot){
            biggerGrp.push(nums[i])
        } 
        else {
            equalGrp.push(nums[i])
        }
    }

    return [...smallerGrp, ...equalGrp, ...biggerGrp]
};

let nums = [9,12,5,10,14,3,10], pivot = 10
// Output: [9,5,3,10,10,12,14]

// let nums = [-3,4,3,2], pivot = 2
// Output: [-3,2,4,3]

console.log(pivotArray(nums, pivot))