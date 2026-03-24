// 541. Reverse String II

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const reverseStr = (s, k) => {
    let blockSizeK = 2 * k;
    let arrStr = s.split('')

    for(let i = 0; i < arrStr.length; i += blockSizeK){
        let left = i;
        let right = Math.min(i + k - 1, arrStr.length - 1)

        while(left < right){
            let temp = arrStr[left]
            arrStr[left] = arrStr[right]
            arrStr[right] = temp

            left++
            right--
        }
    }

    return arrStr.join("")
};

let s = "abcdefg", k = 2
// Output: "bacdfeg"

// let s = "abcd", k = 2
// Output: "bacd"

// let s = "abc", k = 5


console.log(reverseStr(s, k))