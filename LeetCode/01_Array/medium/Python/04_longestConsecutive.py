# 128. Longest Consecutive Sequence

from typing import List

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        hashSet = set(nums)
        current = 0
        length = 0
        longest = 0

        for num in hashSet:
          if num - 1 in hashSet:
             continue

          if num - 1 not in hashSet:
            current = num
            length = 1

            while current + 1 in hashSet:
              current = current + 1
              length += 1
              
          if length > longest:
            longest = length
            
        return longest
                

nums = [100,4,200,1,3,2]
# Output: 4

# nums = [0,3,7,2,5,8,4,6,0,1]
# Output: 9

# nums = [1,0,1,2]
# Output: 3

sol = Solution()
print(sol.longestConsecutive(nums))