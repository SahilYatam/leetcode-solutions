# 942. DI String Match

from typing import List

class Solution:
    def diStringMatch(self, s: str) -> List[int]:
        n = len(s)
        low = 0
        high = len(s)

        result = []

        for i in range(n+1):
            if i == n or s[i] == "I":
                result.append(low)
                low += 1
            else:
                result.append(high)
                high -= 1
            
        
        return result


s = "IDID"
# Output: [0,4,1,3,2]

# s = "DDI"
# Output: [3,2,0,1]

sol = Solution()
print(sol.diStringMatch(s))


