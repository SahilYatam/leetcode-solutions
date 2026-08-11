# 3191. Minimum Operations to Make Binary Array Elements Equal to One I

from typing import List


class Solution:
    def minOperations(self, nums: List[int]) -> int:
        minOps = 0
        n = len(nums)

        for i in range(n):

            if nums[i] == 0:
                # Checking if we can flip a window of size 3
                if i + 2 >= n:
                    return -1

                # flip exactly 3 elements
                for k in range(i, i + 3):
                    nums[k] = 1 - nums[k]
                minOps += 1

        return minOps


nums = [0, 1, 1, 1, 0, 0]
# Output: 3

# nums = [0,1,1,1]
# Output: -1

# nums = [1,1,0]

sol = Solution()
print(sol.minOperations(nums))
