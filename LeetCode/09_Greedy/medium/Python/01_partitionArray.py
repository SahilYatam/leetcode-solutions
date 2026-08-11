# 2294. Partition Array Such That Maximum Difference Is K

from typing import List

class Solution:
    def partitionArray(self, nums: List[int], k: int) -> int:
        nums.sort()
        totalGrp = 1

        start = nums[0]

        for i in range(len(nums)):
            if nums[i] - start <= k:
                continue
            else:
                totalGrp += 1
                start = nums[i]


        return totalGrp


# nums = [3,6,1,2,5]
# k = 2
# Output: 2

# nums = [1,2,3]
# k = 1
# Output: 2

nums = [2,2,4,5]
k = 0
# Output: 3

sol = Solution()
print(sol.partitionArray(nums, k))