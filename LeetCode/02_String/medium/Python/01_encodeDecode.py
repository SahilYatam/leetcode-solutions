# Encode and Decode Strings

from typing import List

class Solution:

    def encode(self, strs: List[str]) -> str:
        fullStr = ""

        for word in strs:
            length = len(word)
            fullStr += str(length) + "#" + word # type: ignore

        return fullStr

    def decode(self, s: str) -> List[str]:
        result = []
        i = 0

        while(i < len(s)):
            # Read the length
            length = ""

            while(s[i] != "#"):
                length += s[i]
                i += 1
            
            length = int(length)
            print("length:", length)

            # skip "#"
            i += 1

            # Read the word
            result.append(s[i : i+length])

            # Jump to the next encoded string
            i += length

        return result

sol = Solution()
strs = ["Hello","World"]
str = sol.encode(strs)

print(sol.decode(str))

# Output: ["Hello","World"]



