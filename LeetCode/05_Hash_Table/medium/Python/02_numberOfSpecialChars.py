# 3121. Count the Number of Special Characters II

class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        n = len(word)
        count = 0

        lowercase_positions = {}
        uppercase_positions = {}

        for i in range(n):
            if word[i].islower():
                lowercase_positions[word[i]] = i
            if word[i].isupper():
                if word[i] not in uppercase_positions:
                    uppercase_positions[word[i]] = i
            
        for ch in lowercase_positions:
            if ch.upper() in uppercase_positions and lowercase_positions[ch] < uppercase_positions[ch.upper()]:
                count += 1

        return count



word = "aaAbcBC"
# Output: 3

# word = "abc"
# Output: 0

# word = "AbBCab"
# Output: 0

sol = Solution()
print(sol.numberOfSpecialChars(word))
