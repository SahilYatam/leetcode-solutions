/**
 * LeetCode question: 1431. Kids With the Greatest Number of Candies
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
    let currentMax = Math.max(...candies)
    let result = []

    for(let i = 0; i < candies.length; i++){
        let val = candies[i] + extraCandies;
        result.push( val >= currentMax)
    }

    return result
};

let candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
console.log(kidsWithCandies(candies, extraCandies))