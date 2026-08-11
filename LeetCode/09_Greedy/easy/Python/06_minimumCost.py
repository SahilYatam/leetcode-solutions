# 2144. Minimum Cost of Buying Candies With Discount

from typing import List

class Solution:
    def minimumCost(self, cost: List[int]) -> int:
        answer = 0
        
        cost.sort(reverse=True)

        for i in range(len(cost)):
            if i % 3 != 2:
                answer += cost[i]

        return answer 
        
        
# cost = [1,2,3]
# Output: 5

# cost = [6,5,7,9,2,2]
# Output: 23

cost = [5,5]
# Output: 10


sol = Solution()
print(sol.minimumCost(cost))