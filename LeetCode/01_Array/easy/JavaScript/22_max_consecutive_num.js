/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
    let currentStreak = 0;
    let maxStreak = 0

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            currentStreak++;
            if(currentStreak > maxStreak) {
                maxStreak = currentStreak;
            }
        } else {
            currentStreak = 0
            if(currentStreak > maxStreak){
                maxStreak = currentStreak
            }
        }
    }
    return maxStreak
};

let nums = [1,1,0,1,1,1]
// Output: 3

// let nums = [1,0,1,1,0,1]
//  Output: 2

console.log(findMaxConsecutiveOnes(nums));
