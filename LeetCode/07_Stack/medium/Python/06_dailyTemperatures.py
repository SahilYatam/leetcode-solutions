# 739. Daily Temperatures

from typing import List
from collections import deque

class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = deque()
        ans = [0]*len(temperatures)

        for i in range(len(temperatures)): 

            while len(stack) != 0:
                top = stack[-1]

                if temperatures[i] <= top[0]:
                    break

                warmDay = i - top[1]
                ans[top[1]] = warmDay
                stack.pop()

            stack.append((temperatures[i], i))


        return ans





temperatures = [73,74,75,71,69,72,76,73]
# Output: [1,1,4,2,1,1,0,0]

# temperatures = [22,21,20]
# Output: [0,0,0]

sol = Solution()
print(sol.dailyTemperatures(temperatures));
