# 443. String Compression

from typing import List

class Solution:
    def compress(self, chars: List[str]) -> int:
        writeP = 0
        count = 1

        for readP in range(1, len(chars) + 1):
            if readP == len(chars) or chars[readP] != chars[readP - 1]:
                chars[writeP] = chars[readP - 1]
                writeP += 1

                if count > 1:
                    digits = str(count)
                    for d in digits:
                        chars[writeP] = d
                        writeP += 1
                
                count = 1
            else:
                count += 1
            
        return writeP




chars = ["a","a","b","b","c","c","c"]
# chars = ["a"]
# chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
sol = Solution()
print(sol.compress(chars))
