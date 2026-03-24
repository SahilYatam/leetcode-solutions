from typing import List

'''
 LeetCode question: 219. Contains Duplicate II
'''

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        my_set = set()

        for i, num in enumerate(nums):
            if num in my_set:
                return True
            my_set.add(num)
            size = len(my_set)

            if size > k:
                my_set.remove(nums[i - k])
        
        return False


nums =[1,2,3,1,2,3]
k = 2
sol = Solution()

print(sol.containsNearbyDuplicate(nums, k))
