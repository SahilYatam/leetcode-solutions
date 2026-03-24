'''
LeetCode question: 345. Reverse Vowels of a String
'''

class Solution:
    def reverseVowels(self, s: str) -> str:
        str = list(s)
        vowels = ["a", "e", "i", "o", "u"]

        left = 0
        right = len(str) - 1

        while left < right:
            swap = ""

            if str[left].lower() not in vowels:
                left += 1
            elif str[right].lower() not in vowels:
                right -= 1
            else:
                swap = str[left]
                str[left] = str[right]
                str[right] = swap

                left += 1
                right -= 1
        
        return "".join(str)
                


s = "IceCreAm"

sol = Solution()
print(sol.reverseVowels(s))