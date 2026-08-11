# 3668. Restore Finishing Order

from typing import List

class Solution:
    def recoverOrder(self, order: List[int], friends: List[int]) -> List[int]:
        fSet = set(friends)
        result = []

        for i in range(len(order)):
            if order[i] in fSet:
                result.append(order[i])
        
        return result

        
order = [3,1,2,5,4]
friends = [1,3,4]
# Output: [3,1,4]

# order = [1,4,5,3,2]
# friends = [2,5]
# Output: [5,2]

sol = Solution()
print(sol.recoverOrder(order, friends))