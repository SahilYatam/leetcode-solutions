// 2149. Rearrange Array Elements by Sign

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = function(nums) {
    let positiveNums = [], negetiveNums = [];
    let ans = [];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            positiveNums.push(nums[i])
        } 
        else {
            negetiveNums.push(nums[i])
        }
    }

    let pPointer = 0, nPointer = 0;

    while(pPointer < positiveNums.length && nPointer < negetiveNums.length){
        ans.push(positiveNums[pPointer])
        ans.push(negetiveNums[nPointer])

        pPointer++
        nPointer++
    }

    return ans
};


let nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]

// let nums = [-1,1]
// Output: [1,-1]

console.log(rearrangeArray(nums))