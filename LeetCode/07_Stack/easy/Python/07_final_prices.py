# 1475. Final Prices With a Special Discount in a Shop

from typing import List
'''
class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        result = []
        n = len(prices)

        for i in range(n):
            final_price = prices[i]
            j = i + 1

            while j < n:
                if j > i and prices[j] <= prices[i]:
                    final_price = prices[i] - prices[j]
                    break
                j+=1

            result.append(final_price)
            
            
        return result
'''
class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        stack = []
        n = len(prices)
        result = [0] * n

        for i in range(n-1, -1, -1):
            while len(stack) != 0 and stack[-1] > prices[i]:
                stack.pop()
            
            if len(stack) == 0:
                result[i] = prices[i]
            else:
                result[i] = prices[i] - stack[-1]
            
            stack.append(prices[i])
            
        return result

prices = [8,4,6,2,3]
# Output: [4,2,4,2,3]

# prices = [1,2,3,4,5]
# Output: [1,2,3,4,5]

# prices = [10,1,1,6]
# Output: [9,0,1,6]

sol = Solution()
print(sol.finalPrices(prices))

