# 912. Sort an Array

from typing import List

class Solution:
    def merge(self, arr, st, mid, end):
        temp = []
        i = st
        j = mid+1

        while i <= mid and j <= end:
            if arr[i] <= arr[j]:
                temp.append(arr[i])
                i += 1
            else:
                temp.append(arr[j])
                j += 1
        
        while i <= mid:
            temp.append(arr[i])
            i += 1
        
        while j <= end:
            temp.append(arr[j])
            j += 1

        for idx in range(len(temp)):
            arr[idx + st] = temp[idx]


    def merge_sort(self, arr, st, end):
        if st < end:
            mid = st + (end - st) // 2
            self.merge_sort(arr, st, mid) # left half
            self.merge_sort(arr, mid+1, end) # right half

            self.merge(arr, st, mid, end)


    def sortArray(self, nums: List[int]) -> List[int]:
        self.merge_sort(nums, 0, len(nums) - 1)

        return nums
       
# optimized bubble sort
'''
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        for i in range(n):
            swapped = False

            for j in range(0, n-i-1):
                if nums[j] > nums[j+1]:
                    [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
                    swapped = True
            
            if not swapped:
                break
            
        return nums

'''

nums = [5,2,3,1]
# Output: [1,2,3,5]

# nums = [5,1,1,2,0,0]
# Output: [0,0,1,1,2,5]

sol = Solution()
print(sol.sortArray(nums))
