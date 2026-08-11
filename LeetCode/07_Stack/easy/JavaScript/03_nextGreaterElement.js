// 496. Next Greater Element I


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {
    let stack = []
    let next_greater = new Map()
    let result = []

    for(let i = 0; i < nums2.length; i++){
        while(stack.length !== 0 && nums2[i] > stack[stack.length -1]){
            let popped = stack.pop()
            next_greater.set(popped, nums2[i])
        }
        stack.push(nums2[i])
    }

    for(let val of stack){
        next_greater.set(val, -1)
    }

    for(let i = 0; i < nums1.length; i++){
        result.push(next_greater.get(nums1[i]))
    }
    return result
};


let nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]

// let nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]

console.log(nextGreaterElement(nums1, nums2))