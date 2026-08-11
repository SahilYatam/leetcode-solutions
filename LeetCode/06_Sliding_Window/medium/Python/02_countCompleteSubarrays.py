# 2799. Count Complete Subarrays in an Array

from typing import List


class Solution:
    def countCompleteSubarrays(self, nums: List[int]) -> int:
        my_set = set(nums)
        total_distinct = len(my_set)

        freq_map = {}
        n = len(nums)

        left = 0
        count = 0

        for right in range(n):
            freq_map[nums[right]] = freq_map.get(nums[right], 0) + 1

            while len(freq_map) == total_distinct:

                count += n - right

                freq_map[nums[left]] -= 1

                if freq_map[nums[left]] == 0:
                    del freq_map[nums[left]]

                left += 1

        return count


nums = [1, 3, 1, 2, 2]
# Output: 4

# nums = [5,5,5,5]
# Output: 10


sol = Solution()
print(sol.countCompleteSubarrays(nums))
