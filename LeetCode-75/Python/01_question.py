'''
1768. Merge Strings Alternately
'''

class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = []
        maxLen = max(len(word1), len(word2))

        for i in range(maxLen):
            if i < len(word1):
                result.append(word1[i])
            if i < len(word2):
                result.append(word2[i])

        return "".join(result)


word1 = "ab"
word2 = "pqrs"
# Output: "apbqrs"
sol = Solution()
print(sol.mergeAlternately(word1, word2))