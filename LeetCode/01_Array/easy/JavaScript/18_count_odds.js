/**
 * LeetCode question: 1523. Count Odd Numbers in an Interval Range
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = (low, high) => {
    let count =  Math.floor((high + 1) / 2) - Math.floor(low / 2)
    return count
};

const low = 3
const high = 7

console.log(countOdds(low, high));