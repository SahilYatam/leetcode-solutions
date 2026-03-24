# LeetCode question: 169. Majority Element
from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        remainder = len(nums) // 2
        counts = {}

        for num in nums:
            if num not in counts:
                counts[num] = 1
            else:
                counts[num] = counts.get(num, 0) + 1
        
        for num, count in counts.items():
            if count > remainder:
                return num

        return 0


nums = [2,2,1,1,1,2,2]

sol = Solution()
print(sol.majorityElement(nums))
