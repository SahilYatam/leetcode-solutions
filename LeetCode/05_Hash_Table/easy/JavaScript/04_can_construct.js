// 383. Ransom Note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    let wordMap = new Map()

    // Build frequency map
    for (let char of magazine) {
        if (wordMap.has(char)) {
            wordMap.set(char, wordMap.get(char) + 1);
        } else {
            wordMap.set(char, 1)
        }
    }

    // Check ransomNote
    for (let char of ransomNote) {
        if (!wordMap.has(char) || wordMap.get(char) === 0) {
            return false
        }
        else {
            wordMap.set(char, wordMap.get(char) - 1)
        }
    }

    return true
};

// let ransomNote = "a", magazine = "b"
// Output: false

// let ransomNote = "aa", magazine = "ab"
//  Output: false

let ransomNote = "aa", magazine = "aab"
// Output: true

console.log(canConstruct(ransomNote, magazine));