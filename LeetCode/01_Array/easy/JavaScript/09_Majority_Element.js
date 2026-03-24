/**
 * LeetCode question: 169. Majority Element
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = (nums) => {
    const remainder = Math.floor(nums.length / 2);

    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], 1)
        } else{
            let value = map.get(nums[i]);
            map.set(nums[i], value+1);
        }
    }

    for(const [num, count] of map.entries()){
        if(count > remainder){
            return num
        }
    }

} 

const nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))