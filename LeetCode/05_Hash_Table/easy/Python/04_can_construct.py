# 383. Ransom Note

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        word_map = {}

        # build frequency map
        for char in magazine:
            word_map[char] = word_map.get(char, 0) + 1
        
        # validate ransomNote
        for char in ransomNote:
            if char not in word_map or word_map[char] == 0:
                return False
            word_map[char] -= 1
        
        return True
                



# ransomNote = "a"
# magazine = "b"
# Output: false

# ransomNote = "aa"
# magazine = "ab"
# Output: false

ransomNote = "aa"
magazine = "aab"
# # Output: true

# ransomNote = "aaa"
# magazine = "ab"
# Output: false

sol = Solution()
print(sol.canConstruct(ransomNote, magazine))
