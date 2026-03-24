# 290 Word Pattern

class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        word = s.split()
        if len(word) != len(pattern):
            return False
        
        firstMap = {}
        secondMap = {}

        for i in range(len(pattern)):
            if pattern[i] in firstMap:
                val = firstMap.get(pattern[i])
                if val != word[i]:
                    return False
            else:
                firstMap[pattern[i]] = word[i]

            if word[i] in secondMap:
                val = secondMap.get(word[i])
                if val != pattern[i]:
                    return False
                
            else:
                secondMap[word[i]] = pattern[i]


        return True
        

pattern = "abba"
s = "dog cat cat dog"
# Output: true


# pattern = "abba"
# s = "dog cat cat fish"
# Output: false

# pattern = "aaaa"
# s = "dog cat cat dog"
# Output: false

sol = Solution()
print(sol.wordPattern(pattern, s))