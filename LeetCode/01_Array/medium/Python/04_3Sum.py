# 15. 3Sum

from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        result = []

        for i in range(len(nums)):

            # Skip duplicate
            if i > 0 and nums[i] == nums[i-1]:
                continue

            left = i + 1
            right = len(nums)-1

            while left < right:
                curr_sum = nums[i] + nums[left] + nums[right]

                if curr_sum == 0:
                    result.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1

                    # Skip duplicate on the left side pointer
                    while left < right and nums[left] == nums[left-1]:
                        left += 1

                    # Skip duplicate on the right side pointer
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1

                elif curr_sum < 0:
                    left += 1
                elif curr_sum > 0:
                    right -= 1

        return result

nums = [-1,0,1,2,-1,-4]
# Sorted [-4,-1,-1,0,1,2]
# Output: [[-1,-1,2],[-1,0,1]]

# nums = [0,0,0]
# Output: [[0,0,0]]

# nums = [0,1,1]
# Output: []

sol = Solution()
print(sol.threeSum(nums))

        
