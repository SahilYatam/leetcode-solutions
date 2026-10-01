# 853. Car Fleet

from typing import List
from collections import deque

class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pair = [[p,s] for p, s in zip(position, speed)]
        pair.sort(key=lambda x: x[0], reverse=True)

        stack = deque()

        for p, s in pair:
            stack.append((target - p) / s)

            if len(stack) >= 2 and stack[-1] <= stack[-2]:
                stack.pop()

        return len(stack)




target = 12
position = [10,8,0,5,3]
speed = [2,4,1,1,3]

# Output: 3

# target = 100
# position = [0,2,4]
# speed = [4,2,1]

# Output: 1

sol = Solution()
print(sol.carFleet(target, position, speed))
