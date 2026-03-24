// 2379. Minimum Recolors to Get K Consecutive Black Blocks

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */

const minimumRecolors = (blocks, k) => {
    let left = 0
    let right = k - 1;
    let whiteCount = 0;
    let minOperations = 0

    for(let i = 0; i <= right; i++){
        if(blocks[i] === "W"){
            whiteCount++
        }
    }

    minOperations = whiteCount;

    right++

    while(right < blocks.length){
        if(blocks[left] === "W"){
            whiteCount--
        } 
        if(blocks[right] === "W"){
            whiteCount++
        }

        minOperations = Math.min(minOperations, whiteCount)

        left++
        right++
    }
    return minOperations
};

// let blocks = "WBBWWBBWBW", k = 7
// Output: 3

let blocks = "WBWBBBW", k = 2
// Output: 0

console.log(minimumRecolors(blocks, k));