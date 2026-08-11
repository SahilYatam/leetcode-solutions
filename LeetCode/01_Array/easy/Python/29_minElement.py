# 3300. Minimum Element After Replacement With Digit Sum

from typing import List

class Solution:
    def minElement(self, nums: List[int]) -> int:
        arr = []
        for i in range(len(nums)):
            num = nums[i]
            digit_sum = 0

            while num > 0:
                digit = num % 10
                digit_sum += digit

                num = num // 10

            arr.append(digit_sum)
        
        return min(arr)



# nums = [10,12,13,14]
# Output: 1

# nums = [1,2,3,4]
# # Output: 1

nums = [999,19,199]
# Output: 10

sol = Solution()
print(sol.minElement(nums))
