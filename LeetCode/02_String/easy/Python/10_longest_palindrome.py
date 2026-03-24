# 409. Longest Palindrome

class Solution:
    def longestPalindrome(self, s: str) -> int:
        freq = {}
        length = 0
        hasOdd = False

        # count frequencies
        for char in s:
            freq[char] = freq.get(char, 0) + 1

        # build palindrom length
        for count in freq.values():
            if count % 2 == 0:
                length += count
            else:
                length += count - 1
                hasOdd = True
        
        # one add character can be placed in the center
        if hasOdd:
            length += 1


        return length
        


s = "abccccdd"
#  Output: 7

# s = "a"
#  Output: 1

sol = Solution()
print(sol.longestPalindrome(s))