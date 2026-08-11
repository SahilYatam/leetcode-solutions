# 2094. Finding 3-Digit Even Numbers

from typing import List

class Solution:
    def findEvenNumbers(self, digits: List[int]) -> List[int]:
        result = set()

        def backtrack(path, used):
            if len(path) == 3:
                num = path[0] * 100 + path[1] * 10 + path[2]

                if num % 2 == 0:
                    result.add(num)

                return
            
            for i in range(len(digits)):
                if used[i]:
                    continue

                # Leading zero not allowed
                if len(path) == 0 and digits[i] == 0:
                    continue
                
                used[i] = True
                path.append(digits[i])

                backtrack(path, used)

                path.pop()

                used[i] = False
        
        used = [False] * len(digits)
        backtrack([], used)

        return sorted(result)


digits = [2,1,3,0]
# Output: [102,120,130,132,210,230,302,310,312,320]

# digits = [2,2,8,8,2]
# Output: [222,228,282,288,822,828,882]

# digits = [3,7,5]
# Output: []



sol = Solution()
print(sol.findEvenNumbers(digits))
