// 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
const numOfSubarrays = function(arr, k, threshold) {
    let n = arr.length;
    let count = 0, currSum = 0;

    for(let i = 0; i < k; i++){
        currSum += arr[i]
    }

    if(Math.floor(currSum / k) >= threshold){
        count++
    }

    for(let i = k; i < n; i++){
        currSum -= arr[i - k]

        currSum += arr[i]

        if(Math.floor(currSum/k) >= threshold){
            count++
        }
    }

    return count
};

let arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// Output: 3

// let arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
// Output: 6

console.log(numOfSubarrays(arr, k, threshold))

