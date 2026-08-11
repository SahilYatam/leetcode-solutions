# 1282. Group the People Given the Group Size They Belong To

from typing import List

class Solution:
    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
        hashMap = {}
        result = []

        for i in range(len(groupSizes)):
            if groupSizes[i] in hashMap:
                hashMap[groupSizes[i]].append(i)
            else:
                hashMap[groupSizes[i]] = [i]

        for size, people_list in hashMap.items():
            for start in range(0, len(people_list), size):
                group = people_list[start:start + size]
                result.append(group)

        return result

groupSizes = [3,3,3,3,3,1,3]
# Output: [[5],[0,1,2],[3,4,6]]

# groupSizes = [2,1,3,3,3,2]
# Output: [[1],[0,5],[2,3,4]]


sol = Solution()
print(sol.groupThePeople(groupSizes))