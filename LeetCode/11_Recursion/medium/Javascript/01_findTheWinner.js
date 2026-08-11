// 1823. Find the Winner of the Circular Game

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findTheWinner = function(n, k) {
    let arr = []
    for(let i = 1; i <=n; i++){
        arr.push(i)
    }

    function recurFn(arr, k, idx){
        if(arr.length === 1){
            return arr[0]
        }

        idx = (idx + k - 1) % arr.length;

        arr.splice(idx, 1)

        return recurFn(arr, k, idx)
    }
    return recurFn(arr, k, 0)
};

let n = 5, k = 2
// Output: 3

// let n = 6, k = 5
// Output: 1

console.log(findTheWinner(n, k))
