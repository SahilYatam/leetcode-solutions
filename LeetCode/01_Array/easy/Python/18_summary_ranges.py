# 228. Summary Ranges

from typing import List

class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if len(nums) == 0: return []
        if len(nums) == 1: return [str(nums[0])]

        result = []

        rangeStart = nums[0]

        for i in range(len(nums) - 1):
            if nums[i] + 1 != nums[i+1]:
                rangeEnd = nums[i]
                result.append([rangeStart, rangeEnd])

                rangeStart = nums[i + 1]
        
        result.append([ rangeStart, nums[-1] ])
        
        formatted = []

        for start, end in result:
            if start == end:
                formatted.append(str(start))
            else:
                formatted.append(f"{start}->{end}")

        return formatted
            



# nums = [0,1,2,4,5,7]
# Output: ["0->2","4->5","7"]

nums = [0,2,3,4,6,8,9]
# Output: ["0","2->4","6","8->9"]

sol = Solution()
print(sol.summaryRanges(nums))