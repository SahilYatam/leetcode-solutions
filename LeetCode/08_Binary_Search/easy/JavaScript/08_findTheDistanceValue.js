// 1385. Find the Distance Value Between Two Arrays

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let sortedArr1 = arr1.sort((a, b) => a-b)
    let sortedArr2 = arr2.sort((a, b) => a-b)

    let n1 = sortedArr1.length, n2 = sortedArr2.length;

    let count = 0

    for(let i = 0; i < n1; i++){
        let st = 0, end = n2

        while(st < end){
            let mid = Math.floor(st + (end-st) / 2)

            if(sortedArr2[mid] >= sortedArr1[i] - d){
                end = mid
            } else {
                st = mid + 1
            }
        }

        if(st === n2){
            count++
            continue
        } else if(sortedArr2[st] <= sortedArr1[i] + d){
            continue
        } else{
            count++
        }
    }

    return count
};


/**
 * var findTheDistanceValue = function(arr1, arr2, d) {
    let sortedArr1 = arr1.sort((a, b) => a-b)
    let sortedArr2 = arr2.sort((a, b) => a-b)

    let count = 0

    for(let i = 0; i < sortedArr1.length; i++){
        let valid = true
        for(let j = 0; j < sortedArr2.length; j++){
            if(Math.abs(sortedArr1[i] - sortedArr2[j]) <= d){
                valid = false
                break
            }
        }
        if(valid){
            count++
        }
    }

    return count
};

 */

// let arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
// Output: 2

// let arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
// Output: 2

let arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
// Output: 1

console.log(findTheDistanceValue(arr1, arr2, d))