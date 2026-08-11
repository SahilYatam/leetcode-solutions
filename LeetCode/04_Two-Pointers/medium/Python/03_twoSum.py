# 167. Two Sum II - Input Array Is Sorted

from typing import List


class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers) - 1

        while left < right:
            current_sum = numbers[left] + numbers[right]

            if current_sum > target:
                right -= 1
            elif current_sum < target:
                left += 1
            else:
                return [left + 1, right + 1]

        return []


numbers, target = [2, 7, 11, 15], 9
# Output: [1,2]

# numbers, target = [2,3,4], 6
# Output: [1,3]

sol = Solution()
print(sol.twoSum(numbers, target))
