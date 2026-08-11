// 3794. Reverse String Prefix

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reversePrefix = (s, k) => {
    let left = 0
    let right = k - 1

    let arr = s.split('')

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    
    return arr.join('')
};

let s = "abcd", k = 2
// Output: "bacd"

// let s = "xyz", k = 3
// Output: "zyx"

// let s = "hey", k = 1
// Output: "hey"

console.log(reversePrefix(s, k));
