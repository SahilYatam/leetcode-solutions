# 1652. Defuse the Bomb

from typing import List

class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        if k == 0:
            return [0] * len(code)
        
        n = len(code)
        result = [0] * n 
        window_size = abs(k)
        curr_sum = 0

        # Building initial window
        if k > 0:
            for i in range(1, window_size + 1):
                curr_sum += code[i % n]
            
        else:
            for i in range(1, window_size + 1):
                curr_sum += code[(n - i) % n]

        

        # Sliding window
        for i in range(n):
            result[i] = curr_sum

            if k > 0:
                curr_sum -= code[(i + 1) % n]
                curr_sum += code[(i + window_size + 1) % n]
            
            elif k < 0:
                curr_sum -= code[(i - window_size + n) % n]
                curr_sum += code[i]

        
        return result



# code = [5,7,1,4]
# k = 3
# Output: [12,10,16,13]

# code = [1,2,3,4]
# k = 0
# Output: [0,0,0,0]

code = [2,4,9,3]
k = -2
# Output: [12,5,6,13]

sol = Solution()
print(sol.decrypt(code, k))