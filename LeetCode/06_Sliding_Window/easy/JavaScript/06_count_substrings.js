// 3258. Count Substrings That Satisfy K-Constraint I

/**
 * 
 * @param {String} s 
 * @param {number} k 
 * @returns {number}
 */

const countKConstraintSubstrings = (s, k) => {
    let countZero = 0
    let countOne = 0

    let result = 0
    let left = 0

    for(let right = 0; right < s.length; right++){
        if(s[right] === "0"){
            countZero++
        }
        else{
            countOne++
        }

        while(countZero > k && countOne > k){
            if(s[left] === "0"){
                countZero--
            } else{
                countOne--
            }
            left++
        }
        result += (right - left + 1)
    }
    return result
}


let s = "1010101", k = 2
// Output: 25

// let s = "10101", k = 1
// Output: 12

// let s = "11111", k = 1
// Output: 15
console.log(countKConstraintSubstrings(s, k))