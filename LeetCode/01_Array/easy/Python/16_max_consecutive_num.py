from typing import List

class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        currentStreak = 0
        maxStreak = 0

        for i in range(len(nums)):
            if nums[i] != 0:
                currentStreak += 1
                if currentStreak > maxStreak:
                    maxStreak = currentStreak
            else: 
                if currentStreak > maxStreak:
                    maxStreak = currentStreak
                currentStreak = 0


        return maxStreak


# nums = [1,1,0,1,1,1]
# Output: 3

nums = [1,0,1,1,0,1]
# Output: 2

sol = Solution()
print(sol.findMaxConsecutiveOnes(nums))
