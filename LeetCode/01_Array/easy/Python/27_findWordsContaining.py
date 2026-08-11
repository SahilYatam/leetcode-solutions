# 2942. Find Words Containing Character


from typing import List

class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
        result = []

        for i in range(len(words)):
            if x in words[i]:
                result.append(i)

        return result


# words = ["leet","code"]
# x = "e"
# Output: [0,1]


# words = ["abc","bcd","aaaa","cbc"]
# x = "a"
# Output: [0,2]


words = ["abc","bcd","aaaa","cbc"]
x = "z"
# Output: []

sol = Solution()
print(sol.findWordsContaining(words, x))

