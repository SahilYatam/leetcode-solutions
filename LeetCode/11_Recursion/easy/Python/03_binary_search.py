from typing import List

class Solution:
    def binarySearch(self, arr: List[int], target: int, st: int, end: int) -> int:
        if st <= end:
            mid = st + (end - st) // 2

            if arr[mid] == target:
                return mid
            elif arr[mid] <= target:
                return self.binarySearch(arr, target, mid+1, end)
            else:
                return self.binarySearch(arr, target, st, mid-1)   

        return -1             

    def search(self, arr: List[int], target: int) -> int:
        return self.binarySearch(arr, target, 0, len(arr)-1)


nums = [-1,0,3,5,9,12]
target = 9
# Output: 4

# nums = [-1,0,3,5,9,12]
# target = 2
# Output: -1

sol = Solution()
print(sol.search(nums, target))