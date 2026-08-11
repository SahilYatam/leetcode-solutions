# 2000. Reverse Prefix of Word

class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        idx = -1

        for i in range(len(word)):
            if word[i] == ch:
                idx = i
                break

        if idx == -1:
                return word
            
        result = word[:idx+1][::-1] + word[idx+1:]

        return result

        

word = "abcdefd"
ch = "d"
# Output: "dcbaefd"

# word = "xyxzxe"
# ch = "z"
# Output: "zxyxxe"

# word = "abcd"
# ch = "z"
# Output: "abcd"

sol = Solution()
print(sol.reversePrefix(word, ch))