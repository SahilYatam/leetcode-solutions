# 917. Reverse Only Letters

class Solution:
    def isLetter(self, char: str) -> bool:
        if len(char) != 1:
            return False
        
        ascii_value = ord(char)

        if (ascii_value >= 65 and ascii_value <= 90) or (ascii_value >= 97 and ascii_value <= 122):
            return True

        return False 

    def reverseOnlyLetters(self, s: str) -> str:
        arr = list(s)
        left = 0
        right = len(arr) -1

        while left < right:
            leftChar = arr[left]
            rightChar = arr[right]

            isLeftLetter = self.isLetter(leftChar)
            isRightLetter = self.isLetter(rightChar)

            if isLeftLetter and isRightLetter:
                [arr[left], arr[right]] = [arr[right], arr[left]]
                left += 1
                right -= 1
            elif not isLeftLetter:
                left += 1
            else:
                right -= 1
        
        return "".join(arr)


# s = "ab-cd"
# Output: "dc-ba"

s = "a-bC-dEf-ghIj"
# Output: "j-Ih-gfE-dCba"

# s = "Test1ng-Leet=code-Q!"
# Output: "Qedo1ct-eeLg=ntse-T!"

sol = Solution()
print(sol.reverseOnlyLetters(s))