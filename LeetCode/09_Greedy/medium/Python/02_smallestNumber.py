# 2375. Construct Smallest Number From DI String


class Solution:
    def smallestNumber(self, pattern: str) -> str:
        n = len(pattern)
        temp = []
        result = []

        for i in range(n + 1):
            temp.append(i+1)

            if i == n or pattern[i] == "I":
                while temp:
                    result.append(temp.pop())

        return "".join(str(x) for x in result)

       
            
        
pattern = "IIIDIDDD"
# Output: "123549876"

# pattern = "DDD"
# Output: "4321"


sol = Solution()
print(sol.smallestNumber(pattern))
