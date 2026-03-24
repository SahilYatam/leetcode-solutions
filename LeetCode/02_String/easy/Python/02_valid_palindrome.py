'''
LeetCode Question: 125. Valid Palindrome
'''
import re

# class Solution:
#     def isPalindrome(self, s: str) -> bool:
#         cleaned = s.lower()
#         cleaned = ''.join(char for char in cleaned if char.isalnum())

#         left = 0
#         right = len(cleaned) -1

#         while left < right:
#             if cleaned[left] != cleaned[right]:
#                 return False
            
#             left += 1
#             right -= 1

#         return True

# Optimize

class Solution:
    def isPalindrome(self, s: str) -> bool:
        clean_string = re.sub(r'[^a-z0-9]', '', s.lower())
        reversed_string = clean_string[::-1]

        return clean_string == reversed_string

s = "A man, a plan, a canal: Panama"
s2 = "race a car"

sol = Solution()
print(sol.isPalindrome(s))