// 2144. Minimum Cost of Buying Candies With Discount

/**
 * @param {number[]} cost
 * @return {number}
 */
const minimumCost = function(cost) {
    let answer = 0

    let revCost = cost.sort((a,b) => b-a);

    for(let i = 0; i < revCost.length; i++){
        if(i % 3 !== 2){
            answer += revCost[i]
        } 
    }

    return answer
};


// let cost = [1,2,3]
// Output: 5

// let cost = [6,5,7,9,2,2]
// Output: 23

let cost = [5,5]
// Output: 10

console.log(minimumCost(cost))
