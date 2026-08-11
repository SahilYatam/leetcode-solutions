# 1441. Build an Array With Stack Operations

from typing import List

class Solution:
    def buildArray(self, target: List[int], n: int) -> List[str]:
        result = []
        pointer = 0
        
        for num in range(1, n+1):
            if pointer < len(target) and num == target[pointer]:
                result.append("Push")
                pointer += 1
            else:
                result.append("Push")
                result.append("Pop")
            
            if pointer == len(target):
                break

        return result



target = [1,3]
n = 3
# Output: ["Push","Push","Pop","Push"]

# target = [1,2,3]
# n = 3
# Output: ["Push","Push","Push"]

# target = [1,2]
# n = 4
# Output: ["Push","Push"]

sol = Solution()
print(sol.buildArray(target, n))
