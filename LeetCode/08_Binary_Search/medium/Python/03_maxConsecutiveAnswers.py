# 2024. Maximize the Confusion of an Exam


class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        countT = 0
        countF = 0

        left = 0
        right = 0

        max_length = 0

        while right < len(answerKey):
            if answerKey[right] == "T":
                countT += 1
            else:
                countF += 1

            right += 1

            while right - left  - max(countT, countF) > k:

                if answerKey[left] == "T":
                    countT -= 1
                else:
                    countF -= 1

                left += 1

            max_length = max(max_length, right - left)

        return max_length


answerKey = "TTFF"
k = 2
# Output: 4

# answerKey = "TFFT"
# k = 1
# Output: 3

# answerKey = "TTFTTFTT"
# k = 1
# Output: 5

sol = Solution()
print(sol.maxConsecutiveAnswers(answerKey, k))
