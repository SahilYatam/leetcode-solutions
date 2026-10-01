# 84. Largest Rectangle in Histogram

from typing import List
from collections import deque

class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        maxArea = 0
        stack = deque() # pair: (index, height)

        for i, h in enumerate(heights):
            start = i

            while stack and stack[-1][1] > h:
                index, height = stack.pop()
                maxArea = max(maxArea, height * (i - index))

                start = index

            stack.append((start, h))

        for i, h in stack:
            maxArea = max(maxArea, h * (len(heights) - i))

        return maxArea


heights = [2,1,5,6,2,3]
# Output: 10

# heights = [7,1,7,2,2,4]
# Output: 8

sol = Solution()
print(sol.largestRectangleArea(heights))
        
