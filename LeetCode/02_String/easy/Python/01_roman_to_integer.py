'''
LeetCode Question: 13. Roman to Integer 
'''


# class Solution:
#     def romanToInt(self, s: str) -> int:
#         roman_values = {
#             'I': 1,
#             'V': 5,
#             'X': 10,
#             'L': 50,
#             'C': 100,
#             'D': 500,
#             'M': 1000
#         }

#         result = 0

#         for i in range(len(s)):
#             current_value = roman_values[s[i]]

#             if i != len(s) -1:
#                 next_value = roman_values[s[i+1]]

#                 if current_value < next_value:
#                     result -= current_value
#                 else:
#                     result += current_value
#             else:
#                 result += current_value

#         return result



class Solution:
    def romanToInt(self, s: str) -> int:
        roman_values = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        result = 0

        for i in range(len(s)):
            current_value = roman_values[s[i]]

            if i + 1 < len(s) and current_value < roman_values[s[i+1]]:
                result -= current_value
            else:
                result += current_value

        return result



s = "MCMXCIV"
sol = Solution()
print(sol.romanToInt(s))