// 1763. Longest Nice Substring
/**
 * @param {string} subStr
 * @return {boolean}
 */

const isNice = (subStr) => {
    let set = new Set(subStr)

    for(let ch of subStr){
        if(!set.has(ch.toLowerCase())){
            return false
        }

        if(!set.has(ch.toUpperCase())){
            return false
        }
    }
    return true
}

/**
 * @param {string} s
 * @return {string}
 */
const longestNiceSubstring = function(s) {
    if(isNice(s)){
        return s
    }

    let set = new Set(s)

    for(let i = 0; i < s.length; i++){
        // current character
        let ch = s[i]

        if(!set.has(ch.toLowerCase()) || !set.has(ch.toUpperCase())){
            // spliting string
            let leftPart = s.slice(0,i)
            let rightPart = s.slice(i+1)

            // recursive calls
            let leftResult = longestNiceSubstring(leftPart)
            let rightResult = longestNiceSubstring(rightPart)

            // returning longest string
            if(leftResult.length >= rightResult.length){
                return leftResult
            } else {
                return rightResult
            }

        }

    }

    return ""
};

let s = "YazaAay"
// Output: "aAa"

// let s = "Bb"
// Output: "Bb"

// s = "c"
// Output: ""

console.log(longestNiceSubstring(s))
