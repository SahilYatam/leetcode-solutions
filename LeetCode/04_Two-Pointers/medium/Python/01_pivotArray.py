# 2161. Partition Array According to Given Pivot

from typing import List

class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        n = len(nums)
        smallerGrp = []
        equalGrp = []
        biggerGrp = []

        for i in range(n):
            if nums[i] < pivot:
                smallerGrp.append(nums[i])
            elif nums[i] > pivot:
                biggerGrp.append(nums[i])
            else:
                equalGrp.append(nums[i])
        
        return smallerGrp + equalGrp + biggerGrp
                

        
nums = [9,12,5,10,14,3,10]
pivot = 10
# Output: [9,5,3,10,10,12,14]

# nums = [-3,4,3,2]
# pivot = 2
# Output: [-3,2,4,3]

sol = Solution()
print(sol.pivotArray(nums, pivot))