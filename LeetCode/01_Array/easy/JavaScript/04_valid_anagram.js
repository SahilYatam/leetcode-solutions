/**
 * LeetCode Array Questin: 242. Valid Anagram
 * 
 * Given two string s and t, return true if t is an anagam of s, and false otherwise.
 * 
 * Example 1:
 *  Input: s = "anagram", t = "nagaram"
 *  Output: true
 * 
 * Example 1:
 *  Input: s = "rat", t = "car"
 *  Output: false
 * 
 */

// Brute force method
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s, t) => {
    if(s.length !== t.length) return false; // step 1: length check

    // Convert t into an array so we can "mark" character as used
    let tArr = t.split('');

    // step 2: comapre every char in s with one in t
    for(let i = 0; i < s.length; i++){
        let found = false;

        for(let j = 0; j < tArr.length; j++){
            if(s[i] === tArr[j]){
                tArr[j] = null; // Mark as used
                found = true;
                break; // Stop searching once matched
            }
        }

        if(!found) return false; // unmatched character -> not an anagram
    }
    return true;
}

const s = "rat";
const t = "car";
console.log(isAnagram(s, t));


// Optimize version
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagramOptimizeV = (s, t) => {
    if(s.length !== t.length) return false; // step 1: length check

    // Create an array of size 26 (for a-z), initialized with zeros
    let charCounts = new Array(26).fill(0);

    // step 2: Increment count for each character in 's' and decrement for each in 't'
    for(let i = 0; i < s.length; i++){
        charCounts[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        charCounts[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    // step 3: Check if all counts are zero
    for (let count of charCounts) {
        if(count !== 0) return false;
    }
    return true; // All counts are zero, so 't' is an anagram of 's'
}

console.log(isAnagramOptimizeV(s, t));


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram2 = (s, t) => {
    if(s.length !== t.length) return false;

    let map = new Map()

    for(let i = 0; i < s.length; i++){
        if(!map.has(s[i])){
            map.set(s[i])
        } else {
            let count = map.get(s[i]);
            map.set(s[i], count += 1)
        }
    }

    for(let j = 0; j < t.length; j++){
        if(!map.has(t[j])){
            return false
        } else {
            let count = map.get(t[j])
            map.set(t[j], count - 1)
        }
    }

    for(const [key, val] of map.entries()){
        if(val !== 0){
            return false
        }
    }

    return true

}

console.log(isAnagram2(s, t));