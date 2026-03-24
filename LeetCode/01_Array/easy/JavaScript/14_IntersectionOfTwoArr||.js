/**
 * LeetCode question: 350. Intersection of Two Arrays ||
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersect = (nums1, nums2) => {
    let map = new Map();

    let result = [];

    for(let i = 0; i < nums1.length; i++){
        if(!map.has(nums1[i])){
            map.set(nums1[i], 1);
        } else {
            let count = map.get(nums1[i])
            map.set(nums1[i], count + 1);
        }
    }

    for(let j = 0; j < nums2.length; j++){
        let count = map.get(nums2[j])
        if(map.has(nums2[j]) && count !== 0){
            map.set(nums2[j], count - 1)
            result.push(nums2[j]);
        } 
    }

    return result
}

// const nums1 = [4,9,5]
// const nums2 = [9,4,9,8,4]


const nums1 = [1,2,2,2,1]
const nums2 = [2,2,2]

console.log(intersect(nums1, nums2));