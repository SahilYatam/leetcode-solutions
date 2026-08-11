# 1011. Capacity To Ship Packages Within D Days

from typing import List

class Solution:
    def canShip(self,  weights: List[int], capacity: int, days: int) -> bool:

        days_used = 1
        current_load = 0

        for i in range(len(weights)):
            
            if current_load + weights[i] <= capacity:
                current_load += weights[i]
            
            else:
                days_used += 1
                current_load = weights[i]
        
        return (days_used <= days)
            
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        left = max(weights)
        right = sum(weights)

        while left < right:
            mid = (left + right) // 2

            if self.canShip(weights, mid, days) == True:
                right = mid # Try smaller capacity
            else:
                left = mid + 1 # Need bigger capacity

        return left


weights = [1,2,3,4,5,6,7,8,9,10]
days = 5
# Output: 15

# weights = [3,2,2,4,1,4]
# days = 3
# Output: 6

# weights = [1,2,3,1,1]
# days = 4
# Output: 3


sol = Solution()
print(sol.shipWithinDays(weights, days))
