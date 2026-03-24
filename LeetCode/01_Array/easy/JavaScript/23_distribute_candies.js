// 575. Distribute Candies

/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = (candyType) => {
    let mySet = new Set()
    
    candyType.forEach((candy) => {
        mySet.add(candy)
    })
    
    let maxCandiesAllowed = Math.floor(candyType.length / 2)

    return Math.min(mySet.size, maxCandiesAllowed)
};

let candyType = [1,1,2,2,3,3]
// Output: 3

// let candyType = [1,1,2,3]
// Output: 2

// let candyType = [6,6,6,6]
// Output: 1

// let candyType = [1, 2, 3, 2, 3]
// Output: 2

console.log(distributeCandies(candyType))