// 1351. Count Negative Numbers in a Sorted Matrix

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0
    let rows = grid.length
    let cols = grid[0].length

    let r = 0, c = cols - 1

    while(r < rows && c >= 0){
        if(grid[r][c] < 0){
            count += (rows - r)
            c -= 1
        } else {
            r += 1
        }
    }

    return count
};



let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8

// let grid = [[3,2],[1,0]]
// Output: 0
console.log(countNegatives(grid))


