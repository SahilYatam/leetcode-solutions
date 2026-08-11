// 1358. Number of Substrings Containing All Three Characters

/**
 * @param {string} s
 * @return {number}
 */
const numberOfSubstrings = function (s) {
    let freq = new Map();
    let n = s.length;

    let left = 0,
        answer = 0;

    for (let right = 0; right < n; right++) {
        freq.set(s[right], (freq.get(s[right]) || 0) + 1);
        
        while(freq.has("a") && freq.has("b") && freq.has("c")){
            answer += (n-right)

            freq.set(s[left], freq.get(s[left]) - 1)

            if(freq.get(s[left]) === 0){
                freq.delete(s[left])
            }
            left++
        }
    }

    return answer
};

let s = "abcabc";
// Output: 10

// let s = "aaacb"
// Output: 3

// let s = "abc"
// Output: 1

console.log(numberOfSubstrings(s));
