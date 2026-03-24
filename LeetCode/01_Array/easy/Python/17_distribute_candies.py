# 575. Distribute Candies

from typing import List

class Solution:
    def distributeCandies(self, candyType: List[int]):
        uniqueCandyTypes = set(candyType)
        maxCandiesAllowed = len(candyType) // 2

        return min(len(uniqueCandyTypes), maxCandiesAllowed)
        

# candyType = [1,1,2,2,3,3]
# Output: 3


# candyType = [1,1,2,3]
# Output: 2

# candyType = [6,6,6,6]
# Output: 1

candyType = [1, 2, 3, 2, 3]
# Output: 2

sol = Solution()
print(sol.distributeCandies(candyType))