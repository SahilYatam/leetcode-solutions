# 500. Keyboard Row

from typing import List

class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        first_row = set("qwertyuiop")
        second_row = set("asdfghjkl")
        third_row = set("zxcvbnm")

        result = []
        
        for word in words:
            lowercase_word = word.lower()
            is_valid = True

            first_char = lowercase_word[0]

            if first_char in first_row:
                target_row = first_row
            elif first_char in second_row:
                target_row = second_row
            elif first_char in third_row:
                target_row = third_row
            
            for char in lowercase_word:
                if char not in target_row:
                    is_valid = False
                    break
            
            if is_valid:
                result.append(word)
        
        return result



# words = ["Hello", "Alaska", "Dad", "Peace"]
# Output: ["Alaska","Dad"]

# words = ["omk"]
# Output: []

words = ["adsdf","sfd"]
# Output: ["adsdf","sfd"]

sol = Solution()
print(sol.findWords(words))