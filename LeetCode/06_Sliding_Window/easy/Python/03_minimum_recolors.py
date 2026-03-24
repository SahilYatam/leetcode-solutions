# 2379. Minimum Recolors to Get K Consecutive Black Blocks

class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        left = 0
        right = k - 1
        whiteCount = 0
        
        for i in range(k):
            if blocks[i] == "W":
                whiteCount += 1

        right += 1

        minOperations = whiteCount

        while right < len(blocks):
            if blocks[left] == "W":
                whiteCount -= 1
            if blocks[right] == "W":
                whiteCount += 1

            minOperations = min(minOperations, whiteCount)

            left += 1
            right += 1
        
        return minOperations


# blocks = "WBBWWBBWBW"
# k = 7
# Output: 3

blocks = "WBWBBBW"
k = 2
# Output: 0

sol = Solution()
print(sol.minimumRecolors(blocks, k))