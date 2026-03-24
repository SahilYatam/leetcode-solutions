/**
 * LeetCode question: 88. Merge Sorted Array
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {number[]} 
 */

const merge = (nums1, m, nums2, n) => {
    let p1 = m -1
    let p2 = n -1

    let p = (m + n) - 1;

    while(p1 >= 0 && p2 >= 0){
        if(nums1[p1] > nums2[p2]){
            nums1[p] = nums1[p1];
            p1--;
        } else{
            nums1[p] = nums2[p2];
            p2--;
        }
        p--
    }

    while(p2 >= 0){
        nums1[p] = nums2[p2];
        p2--
        p--
    }

    return nums1;
}

const nums1 = [4, 5, 6, 0, 0, 0]
const m=3
const nums2 = [1, 2, 3]     
const n=3

console.log(merge(nums1, m, nums2, n));