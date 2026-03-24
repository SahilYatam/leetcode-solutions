/**
 * LeetCode question: 121. Best Time to Buy and Sell Stock
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
    let lowestPrice = prices[0];
    let maximumProfit = 0;

    for(let i = 0; i < prices.length; i++){
        if(prices[i] < lowestPrice){
            lowestPrice = prices[i]
        }

        let profit = prices[i] - lowestPrice
        
        if(profit > maximumProfit){
            maximumProfit = profit
        }
    }
    return maximumProfit
}

const prices =  [7,1,5,3,6,4]
console.log(maxProfit(prices));