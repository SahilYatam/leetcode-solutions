/**
 * LeetCode question: 345. Reverse Vowels of a String
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let str = s.split("")
    console.log(str)
    let vowels = ["a", "e", "i", "o", "u"]
    let left = 0
    let right = str.length -1
    
    while(left < right){
        let swap;
        if(!vowels.includes(s[left].toLocaleLowerCase())){
            left++
        } else if(!vowels.includes(s[right].toLocaleLowerCase())){
            right--
        } else {
            swap = str[left]
            str[left] = str[right]
            str[right] = swap
            
            left++
            right--
        }
    }
    return str.join("")
};

let s = "IceCreAm"
console.log(reverseVowels(s))
