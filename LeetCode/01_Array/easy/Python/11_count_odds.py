'''
LeetCode question: 1523. Count Odd Numbers in an Interval Range
'''

class Solution:
    def countOdds(self, low: int, high: int) -> int:
        count = (high + 1) // 2 - low // 2
        return count
    


low = 8
high = 10

sol = Solution()
print(sol.countOdds(low, high))