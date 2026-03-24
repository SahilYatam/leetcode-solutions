// 49. Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    const map = {};

    for (let word of strs) {
        // 1. create frequency array for a-z
        const count = new Array(26).fill(0);

        for (let char of word) {
            const index = char.charCodeAt(0) - "a".charCodeAt(0);
            count[index]++;
        }

        // 2. convert array to unique key
        const key = count.join("#");

        if (!map[key]) {
            map[key] = []
        }
        map[key].push(word);
    }
    return Object.values(map)
}

let strs = ["act", "pots", "tops", "cat", "stop", "hat"]
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

// let strs = ["x"]
// Output: [["x"]]

// let strs = [""]
// Output: [[""]]

// let strs = ["aaa", "aaa"]
// Outpu: [["aaa", "aaa"]]

console.log(groupAnagrams(strs))