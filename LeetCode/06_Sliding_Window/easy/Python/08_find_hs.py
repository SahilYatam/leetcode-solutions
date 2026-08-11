# 594. Longest Harmonious Subsequence

from typing import List

class Solution:
    def findLHS(self, nums: List[int]) -> int:
        freq_map = {}
        countHs = 0

        for num in nums:
            # Build frequency
            freq_map[num] = freq_map.get(num, 0) + 1

        
        for x, count in freq_map.items():
            if x + 1 in freq_map:
                countHs = max(countHs, count + freq_map[x + 1])

        return countHs


nums = [1,2,2,3,4,5,1,1,1,1]
# Output: 7

# nums = [1,3,2,2,5,2,3,7]
# Output: 5

# nums = [1,2,3,4]
# Output: 2

# nums = [1,1,1,1]
# Output: 0

sol = Solution()
print(sol.findLHS(nums))