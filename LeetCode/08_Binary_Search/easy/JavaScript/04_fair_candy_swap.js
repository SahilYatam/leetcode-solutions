// 888. Fair Candy Swap


/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let set = new Set(bobSizes)

    let sumA = aliceSizes.reduce((prev, curr) => prev + curr, 0)
    let sumB = bobSizes.reduce((prev, curr) => prev + curr, 0)

    let diff = (sumA - sumB) / 2

    for(let x of aliceSizes){
        let y = x - diff
        if(set.has(y)){
            return [x, y]
        }
    }
    return []
};


let aliceSizes = [1,1], bobSizes = [2,2]
// Output: [1,2]

// let aliceSizes = [1,2], bobSizes = [2,3]
// Output: [1,2]

// let aliceSizes = [2], bobSizes = [1,3]
// Output: [2,3]

console.log(fairCandySwap(aliceSizes, bobSizes))