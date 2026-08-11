# 1351. Count Negative Numbers in a Sorted Matrix

from typing import List


class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])

        r, c = 0, cols - 1
        count = 0

        while r < rows and c >= 0:
            if grid[r][c] < 0:
                count += (rows - r)
                c -= 1
            else:
                r += 1
        
        return count

grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
# Output: 8

# grid = [[3,2],[1,0]]
# Output: 0

sol = Solution()
print(sol.countNegatives(grid))

