# 2529. Maximum Count of Positive Integer and Negative Integer

from typing import List

class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        n = len(nums)

        st, end = 0, n - 1
        firstNonNegative = n

        while st <= end:
            mid = (st + end) // 2
            if nums[mid] >= 0:
                firstNonNegative = mid
                end = mid - 1
            else:
                st = mid + 1

        st, end = 0, n - 1
        firstPositive = n

        while st <= end:
            mid = (st + end) // 2
            if nums[mid] > 0:
                firstPositive = mid
                end = mid - 1
            else:
                st = mid + 1

        negatives = firstNonNegative
        positives = n - firstPositive

        return max(negatives, positives)


        

# class Solution:
#     def maximumCount(self, nums: List[int]) -> int:
#         nums.sort()
#         pNum = 0
#         nNum = 0

#         for num in nums:
#             if num == 0:
#                 continue
#             elif num > 0:
#                 pNum += 1
#             else:
#                 nNum += 1

#         return max(pNum, nNum)


# nums = [-2,-1,-1,1,2,3]
# Output: 3

# nums = [-3,-2,-1,0,0,1,2]
# Output: 3

nums = [5,20,66,1314]
# Output: 4

sol = Solution()
print(sol.maximumCount(nums))
