// 1552. Magnetic Force Between Two Balls


/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    let sortPosition = position.sort((a, b) => a - b)

    let low = 1
    let high = sortPosition[sortPosition.length-1] - sortPosition[0]
    let ans = 0

    while(low <= high){
        let lastPosition = sortPosition[0]
        let ballsPlaced = 1
        let mid = Math.floor(low + (high - low) / 2)

        for(let i = 1; i < sortPosition.length; i++){
            if(sortPosition[i] - lastPosition >= mid){
                ballsPlaced++
                lastPosition = sortPosition[i]
            }
        }

        if(ballsPlaced >= m){
            ans = mid
            low = mid + 1
        } else {
            high = mid - 1
        }

    }
    return ans
};


let position = [1,2,3,4,7], m = 3
// Output: 3

// let position = [5,4,3,2,1,1000000000], m = 2
// Output: 999999999

console.log(maxDistance(position, m))
