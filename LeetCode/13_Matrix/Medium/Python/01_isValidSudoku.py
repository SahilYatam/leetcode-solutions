# 36. Valid Sudoku

# matrix = [
#     [1, 2, 3],
#     [4, 5, 6],
#     [7, 8, 9]
# ]

# rows = len(matrix)
# cols = len(matrix[0])

# Traversing Row by Row

# for i in range(rows):
#     for j in range(cols):
#         print(matrix[i][j])

# Traversing column by column

# for j in range(len(matrix[0])):
#     for i in range(len(matrix)):
#         print(matrix[i][j])

from typing import List


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        row = len(board)
        column = len(board[0])

        for i in range(row):
            row_seen = set()
            for j in range(column):
                cell = board[i][j]

                if cell == ".":
                    continue
                
                if cell in row_seen:
                    return False

                row_seen.add(cell)

        for i in range(row):
            col_seen = set()
            for j in range(column):
                cell = board[j][i]

                if cell == ".":
                    continue

                if cell in col_seen:
                    return False

                col_seen.add(cell)

            for start_row in range(0, 9, 3):
                for start_col in range(0, 9, 3):
                    box_seen = set()

                    for i in range(start_row, start_row+3):
                        for j in range(start_col, start_col + 3):

                            cell = board[i][j]

                            if cell == ".":
                                continue

                            if cell in box_seen:
                                return False
                            
                            box_seen.add(cell)


        return True


board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

# Output: true

# board = [
#     ["8", "3", ".", ".", "7", ".", ".", ".", "."],
#     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
#     [".", "9", "8", ".", ".", ".", ".", "6", "."],
#     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
#     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
#     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
#     [".", "6", ".", ".", ".", ".", "2", "8", "."],
#     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
#     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
# ]

# Output: false

sol = Solution()
print(sol.isValidSudoku(board))
