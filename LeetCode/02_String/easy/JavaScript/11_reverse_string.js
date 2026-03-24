// 344. Reverse String

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
    let left = 0;
    let right = s.length -1;
    
    let temp;
    while(left < right){
        temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
    return s
};

let s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// let s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

console.log(reverseString(s))