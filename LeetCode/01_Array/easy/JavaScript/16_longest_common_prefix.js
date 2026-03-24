/**
 * LeetCode question: 14. Longest Common Prefix
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    if (strs.length === 0 || strs[0] === "") return "";
    if (strs.length === 1) return strs[0];

    const shortestStr = Math.min(...strs.map(s => s.length));
    let result = "";
    for (let position = 0; position < shortestStr; position++) {
        let char = strs[0][position];

        for (let stringIndex = 1; stringIndex < strs.length; stringIndex++) {
            if (strs[stringIndex][position] !== char) {
                return result;
            }
        }
        result += char;
    }
    return result;
};

const strs = ["flower", "flow", "flight"]
const strs2 = ["dog", "racecar", "car"]
console.log(longestCommonPrefix(strs))
