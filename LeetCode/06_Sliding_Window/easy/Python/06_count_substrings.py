# 3258. Count Substrings That Satisfy K-Constraint I

class Solution:
    def countKConstraintSubstrings(self, s: str, k: int) -> int:
        left = 0
        count_zero = 0
        count_one = 0

        result = 0

        for right in range(len(s)):
            if s[right] == "0":
                count_zero += 1
            elif s[right] == "1":
                count_one += 1
            
            while count_zero > k and count_one > k:
                if s[left] == "0":
                    count_zero -= 1
                else:
                    count_one -= 1

                left += 1

            result += (right - left + 1)
        
        return result


s = "1010101"
k = 2
# Output: 25

# s = "10101"
# k = 1
# Output: 12

# s = "11111"
# k = 1
# Output: 15

sol = Solution()
print(sol.countKConstraintSubstrings(s, k))