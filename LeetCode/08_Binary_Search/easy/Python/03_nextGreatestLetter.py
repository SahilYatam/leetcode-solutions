# 744. Find Smallest Letter Greater Than Target

from typing import List


class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        st = 0
        end = len(letters) -1

        ans = None

        while st <= end:
            mid = st + (end - st) // 2

            if letters[mid] > target:
                ans = letters[mid]
                end = mid - 1
            
            elif letters[mid] <= target:
                st = mid + 1
        
        if ans is not None:
            return ans
        
        return letters[0]

# class Solution:
#     def nextGreatestLetter(self, letters: List[str], target: str) -> str:

#         for char in letters:
#             if char > target:
#                 return char
        
#         return letters[0]


# letters = ["c","f","j"]
# target = "a"
# Output: "c"

letters = ["c","f","j"]
target = "c"
# Output: "f"

# letters = ["x","x","y","y"]
# target = "z"
# Output: "x"

sol = Solution()
print(sol.nextGreatestLetter(letters, target))
