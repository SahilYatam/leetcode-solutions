# 680. Valid Palindrome II

class Solution:
    def checkPalindrome(self, left: int, right: int, s: str) -> bool:
        while left < right:
            if s[left] != s[right]:
                return False
            left += 1
            right -= 1
        
        return True

    def validPalindrome(self, s: str) -> bool:
        left = 0
        right = len(s) - 1

        while left < right:
            if s[left] == s[right]:
                left += 1
                right -= 1
            else:
                return (
                    self.checkPalindrome(left+1, right, s) or
                    self.checkPalindrome(left, right-1, s)
                )
        
        return True

# s = "aba"
# Output: true

s = "abca"
# Output: true
# Explanation: You could delete the character 'c'.

# s = "abc"
# Output: false

sol = Solution()
print(sol.validPalindrome(s))