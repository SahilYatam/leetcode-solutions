'''
LeetCode question: 14. Longest Common Prefix
'''
from typing import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 0 or len(strs[0]) == "":
            return ""
        elif len(strs) == 1:
            return strs[0]
        
        shortest_len = min(len(s) for s in strs)

        result = ""

        for position in range(shortest_len):
            char = strs[0][position]

            for startingIndex in range(1, len(strs)):
                if strs[startingIndex][position] != char:
                    return result
                
            result += char

        return result

        
strs = ["flower","flow","flight"]
sol = Solution()
print(sol.longestCommonPrefix(strs))

