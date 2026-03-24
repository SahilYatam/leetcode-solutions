/**
 * LeetCode question: 349. Intersection of Two Arrays
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersection = (nums1, nums2) => {
    let set = new Set();
    let intersectElement = new Set();

    for(let i = 0; i < nums1.length; i++){
        set.add(nums1[i]);
    }

    for(let j = 0; j < nums2.length; j++){
        if(set.has(nums2[j])){
            intersectElement.add(nums2[j])
        }
    }
    return Array.from(intersectElement); 

}

let nums1 = [4,9,5]
let nums2 = [9,4,9,8,4]

console.log(intersection(nums1, nums2));