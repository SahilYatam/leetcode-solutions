# 49. Group Anagrams

from typing import List
from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = defaultdict(list)

        for word in strs:
            count = [0] * 26

            for char in word:
                count[ord(char) - ord("a")] += 1
            
            groups[tuple(count)].append(word)
        
        return list(groups.values())


strs = ["act","pots","tops","cat","stop","hat"]
# Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

# strs = ["x"]
# Output: [["x"]]

# strs = [""]
# Output: [[""]]

sol = Solution()
print(sol.groupAnagrams(strs))