# 11. Container With Most Water

from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        ans, left, right = 0, 0, len(height) -1

        while left < right:
            width = right - left
            curr_height = min(height[left], height[right])

            max_area = curr_height * width

            ans = max(ans, max_area)

            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return ans


height = [1,7,2,5,4,7,3,6]
# Output: 36

# height = [2,2,2]
# Output: 4

sol = Solution()
print(sol.maxArea(height))
        