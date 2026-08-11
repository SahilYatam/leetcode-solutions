# 2037. Minimum Number of Moves to Seat Everyone

from typing import List


class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        seats.sort()
        students.sort()

        total = 0
        distance = []
        n = len(seats)

        for i in range(n):
            distance.append(abs(seats[i] - students[i]))

        for sum in distance:
            total += sum

        return total

seats = [3,1,5]
students = [2,7,4]
# Output: 4

# seats = [4,1,5,9]
# students = [1,3,2,6]
# Output: 7

# seats = [2,2,6,6]
# students = [1,3,2,6]
# Output: 4

sol = Solution()
print(sol.minMovesToSeat(seats, students))

