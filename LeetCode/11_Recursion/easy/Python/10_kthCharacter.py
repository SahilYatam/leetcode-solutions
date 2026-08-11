# 3304. Find the K-th Character in String Game I

class Solution:
    def NextAlphabet(self, ch: str):
        val = ord(ch)
        return chr(val+1)

    def kthCharacter(self, k: int) -> str:
        length = 1

        while length < k:
            length = length * 2

        def findCharcter(length, k):
            if length == 1:
                return "a"
            
            half = length / 2

            if k <= half:
                return findCharcter(half, k)

            else:
                ch = findCharcter(half, k-half)
                return self.NextAlphabet(ch)

        return findCharcter(length, k)

k = 5
# Output: "b"

# k = 10
# Output: "c"

sol = Solution()
print(sol.kthCharacter(k))
    