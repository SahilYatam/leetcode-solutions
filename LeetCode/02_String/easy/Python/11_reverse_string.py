# 344. Reverse String

from typing import List

class Solution:
    def reverseString(self, s: List[str]):
        pointer = len(s) -1

        for i in range(len(s)):
            if i < pointer:
                temp = s[i]
                s[i] = s[pointer]
                s[pointer] = temp
                pointer -= 1

        return s



        

s = ["h","e","l","l","o"]
# Output: ["o","l","l","e","h"]

# s = ["H","a","n","n","a","h"]
# Output: ["h","a","n","n","a","H"]

sol = Solution()
print(sol.reverseString(s))
