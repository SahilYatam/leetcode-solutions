"""
LeetCode question: 121. Best Time to Buy and Sell Stock
"""
from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        lowestPrice = prices[0]
        maximumProfit = 0

        for i in range(len(prices)):
            if prices[i] < lowestPrice:
                lowestPrice = prices[i]

            profit = prices[i] - lowestPrice

            if profit > maximumProfit:
                maximumProfit = profit

        return maximumProfit

prices = [7,1,5,3,6,4]
sol = Solution()
print(sol.maxProfit(prices))