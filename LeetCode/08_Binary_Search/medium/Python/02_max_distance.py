# 1552. Magnetic Force Between Two Balls

from typing import List

class Solution:
    def maxDistance(self, position: List[int], m: int) -> int:
        position.sort()

        low = 1
        high = position[-1] - position[0]
        ans = 0
        
        while low <= high:
            last_position = position[0]
            balls_placed = 1
            mid = low + (high - low) // 2

            for i in range(1, len(position)):
                if position[i] - last_position >= mid:
                    balls_placed += 1
                    last_position = position[i]

            if balls_placed >= m:
                ans = mid
                low = mid + 1
            else:
                high = mid - 1


        return ans

position = [1,2,3,4,7]
m = 3
# Output: 3

# position = [5,4,3,2,1,1000000000]
# m = 2
# Output: 999999999


sol = Solution()
print(sol.maxDistance(position, m))