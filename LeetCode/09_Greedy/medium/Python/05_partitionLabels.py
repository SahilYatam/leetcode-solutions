# 763. Partition Labels

from typing import List

class Solution:
    def partitionLabels(self, s: str):
        hash_map = {}
        result = []

        start, end = 0, 0, 

        for i in range(len(s)):
            hash_map[s[i]] = i

        for i in range(len(s)):
            end = max(end, hash_map[s[i]])

            if i == end:
                size = end - start + 1
                result.append(size)
                start = i + 1
        
        return result


s = "ababcbacadefegdehijhklij"
# Output: [9,7,8]

# s = "abac"
# Output: [3,1]

# s = "eccbbbbdec"
# Output: [10]

sol = Solution()
print(sol.partitionLabels(s))
