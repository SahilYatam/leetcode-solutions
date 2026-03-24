# 541. Reverse String II

class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        blockSizeK = 2 * k
        arrStr = list(s)

        for i in range(0, len(arrStr), blockSizeK):
            left = i
            right = min(i + k - 1, len(arrStr) - 1)

            while left < right:
                temp = arrStr[left]
                arrStr[left] = arrStr[right]
                arrStr[right] = temp
                
                left += 1
                right -= 1

        return "".join(arrStr)



# s = "abcdefg"
# k = 2
# Output: "bacdfeg"

# s = "abcd",
# k = 2
# Output: "bacd"

s = "abc"
k = 5

sol = Solution()
print(sol.reverseStr(s, k))