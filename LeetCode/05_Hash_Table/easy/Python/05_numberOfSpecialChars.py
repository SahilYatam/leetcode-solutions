# 3120. Count the Number of Special Characters I

class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        count = 0
        word_set = set(word)

        for ch in word_set:
            if ch.islower():
                if ch.upper() in word_set:
                    count += 1
        return count
    

word = "aaAbcBC"
# Output: 3

# word = "abc"
# Output: 0

# word = "abBCab"
# Output: 1

sol = Solution()
print(sol.numberOfSpecialChars(word))