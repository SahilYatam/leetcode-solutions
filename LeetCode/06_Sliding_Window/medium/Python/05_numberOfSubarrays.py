# 1248. Count Number of Nice Subarrays

from typing import List

class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        left = 0
        oddCount = 0
        answer = 0
        leadingEvens = 0
        n = len(nums)

        for right in range(n):

            if nums[right] % 2 != 0:
                oddCount += 1
                leadingEvens = 0

            while oddCount > k:
                if nums[left] % 2 != 0:
                    oddCount -= 1

                left += 1

            while oddCount == k and nums[left] % 2 == 0:
                leadingEvens += 1
                left += 1


            if oddCount == k:
                answer += leadingEvens + 1

        return answer
                


# nums = [1,1,2,1,1]
# k = 3
# Output: 2

# nums = [2,4,6]
# k = 1
# Output: 0

nums = [2,2,2,1,2,2,1,2,2,2]
k = 2
# Output: 16

sol = Solution()
print(sol.numberOfSubarrays(nums, k))