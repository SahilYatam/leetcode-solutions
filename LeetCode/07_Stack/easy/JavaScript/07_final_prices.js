// 1475. Final Prices With a Special Discount in a Shop

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let result = []
    let n = prices.length

    for(let i = 0; i < n; i++){
        let finalPrice = prices[i]
        let j = i+1

        while(j < n){
            if(j > i && prices[j] <= prices[i]){
                finalPrice = prices[i] - prices[j]
                break
            }
            j++
        }

        result.push(finalPrice)
    }
    return result
};

let prices = [8,4,6,2,3]
// Output: [4,2,4,2,3]

// let prices = [1,2,3,4,5]
// Output: [1,2,3,4,5]

// let prices = [10,1,1,6]
// Output: [9,0,1,6]

console.log(finalPrices(prices))