# 557. Reverse Words in a String III

class Solution:
    def reverseWords(self, s: str) -> str:
        arrStr = list(s)

        i = 0

        while i < len(arrStr):
            if arrStr[i] == ' ':
                i += 1
                continue
            
            j = i
            while j < len(arrStr) and arrStr[j] != ' ':
                j += 1

            left = i
            right = j - 1

            while left < right:
                temp = arrStr[left]
                arrStr[left] = arrStr[right]
                arrStr[right] = temp

                left += 1
                right -= 1

            i = j
        
        return "".join(arrStr)


# s = "Let's take LeetCode contest"
# Output: "s'teL ekat edoCteeL tsetnoc"

s = "Mr Ding"
# Output: "rM gniD"

sol = Solution()
print(sol.reverseWords(s))