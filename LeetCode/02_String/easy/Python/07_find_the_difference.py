'''
LeetCode question: 389. Find the Difference
'''

def findTheDifference(s: str, t: str) -> str:
    sumT = 0
    sumS = 0

    for char in t:
        sumT += ord(char)
    
    for char in s:
        sumS += ord(char)

    return chr(sumT - sumS)

s = "abcd"
t = "abcde"
print(findTheDifference(s, t))