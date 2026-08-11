# 2089. Find Target Indices After Sorting Array

from typing import List

class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        nums.sort()

        st = 0
        end = len(nums) -1
        first = -1

        while st <= end:
            mid = st + (end - st) // 2

            if target > nums[mid]:
                st = mid + 1
            elif target < nums[mid]:
                end = mid - 1
            else:
                first = mid
                end = mid - 1

        if first == -1:
            return []

        result = []
        i = first
        while i < len(nums) and nums[i] == target:
            result.append(i)
            i += 1
        
        return result



nums = [1,2,5,2,3]
target = 2
# Output: [1,2]

# nums = [1,2,5,2,3]
# target = 3
# Output: [3]

# nums = [1,2,5,2,3]
# target = 5
# Output: [4]

sol = Solution()
print(sol.targetIndices(nums, target))