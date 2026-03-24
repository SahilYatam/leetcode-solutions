'''
LeetCode question: 1431. Kids With the Greatest Number of Candies
'''
from typing import List

class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        currentMax = max(candies)
        result = []

        for candy in candies:
            val = candy + extraCandies
            result.append(val >= currentMax)
        
        return result


candies = [2,3,5,1,3]
extraCandies = 3
# Output: [true,true,true,false,true] 
sol = Solution()
print(sol.kidsWithCandies(candies, extraCandies))