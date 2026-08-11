// 128. Longest Consecutive Sequence

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
  let hashSet = new Set(nums)
  let currentNum = 0
  let len = 0
  let longest = 0

  for(let num of hashSet){
    if(hashSet.has(num-1)) continue;

    if(!hashSet.has(num-1)){
      currentNum = num
      len = 1
      
      while(hashSet.has(currentNum + 1)){
        currentNum = currentNum + 1
        len++
      }
    }

    if(len > longest) {
      longest = len
    }
  }

  return longest
};

let nums = [100,4,200,1,3,2]
// Output: 4

// let nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// let nums = [1,0,1,2]
// Output: 3

console.log(longestConsecutive(nums))
