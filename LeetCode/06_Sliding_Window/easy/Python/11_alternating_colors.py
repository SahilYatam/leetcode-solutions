# 3206. Alternating Groups I

from typing import List

class Solution:
    def numberOfAlternatingGroups(self, colors: List[int]) -> int:
        altGroup = 0
        n = len(colors)

        for i in range(n):
            left = (i - 1 + n) % n
            right = (i + 1) % n

            if colors[i] != colors[left] and colors[i] != colors[right]:
                altGroup+=1

        return altGroup



# colors = [1,1,1]
# Output: 0

colors = [0,1,0,0,1]
# Output: 3

sol = Solution()
print(sol.numberOfAlternatingGroups(colors))
