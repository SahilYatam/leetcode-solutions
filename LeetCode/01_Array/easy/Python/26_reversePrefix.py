# 3794. Reverse String Prefix

class Solution:
    def reversePrefix(self, s: str, k: int) -> str:
        left = 0
        right = k - 1

        arr = list(s)

        while left < right:
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left += 1
            right -= 1

        return "".join(arr)

s = "abcd"
k = 2
# Output: "bacd"

# s = "xyz"
# k = 3
# Output: "zyx"

# s = "hey"
# k = 1
# Output: "hey"

sol = Solution()
print(sol.reversePrefix(s, k))