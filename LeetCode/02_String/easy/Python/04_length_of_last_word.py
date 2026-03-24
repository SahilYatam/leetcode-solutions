'''
LeetCode question: 58. Length of Last Word
'''

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len("".join(s.split().pop()))
        

s = "   fly me   to   the moon  "
sol = Solution()
print(sol.lengthOfLastWord(s))