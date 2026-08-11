// 36. Valid Sudoku

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
    let row = board.length;
    let col = board[0].length;

    // Check row
    for (let i = 0; i < row; i++) {
        let row_set = new Set();
        for (let j = 0; j < col; j++) {
            let cell = board[i][j];

            if (cell === ".") continue;

            if (row_set.has(cell)) return false;

            row_set.add(cell);
        }
    }

    // Check col
    for (let i = 0; i < row; i++) {
        let col_set = new Set();
        for (let j = 0; j < col; j++) {
            let cell = board[j][i];

            if (cell === ".") continue;

            if (col_set.has(cell)) return false;

            col_set.add(cell);
        }
    }

    // Check 3x3 box
    for (let start_row = 0; start_row < 9; start_row += 3) {
        for (let start_col = 0; start_col < 9; start_col += 3) {
            let box_set = new Set();

            for (let i = start_row; i < start_row + 3; i++) {
                for (let j = start_col; j < start_col + 3; j++) {
                    let cell = board[i][j];

                    if (cell === ".") continue;

                    if (box_set.has(cell)) return false;

                    box_set.add(cell);
                }
            }
        }
    }

    return true;
};

// let board = [
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// Output: true

let board = [
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
];

// Output: false

console.log(isValidSudoku(board));
