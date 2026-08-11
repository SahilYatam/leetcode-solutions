// 3760. Maximum Substrings With Distinct Start


/**
 * @param {string} s
 * @return {number}
 */

const maxDistinct = (s) => {
    let set = new Set()

    for(let ch of s){
        if(!set.has(ch)){
            set.add(ch)
        }
    }

    return set.size
};

let s = "abab"
// Output: 2

// Explanation:
// Split "abab" into "a" and "bab".
// Each substring starts with a distinct character i.e 'a' and 'b'. Thus, the answer is 2.

// let s = "abcd"
// Output: 4

// let s = "aaaa"
// Output: 1

console.log(maxDistinct(s))