/**
 * LeetCode question: 205. Isomorphic Strings
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;

    let mapS = new Map();
    let mapT = new Map();

    let i = 0;

    while(i < s.length && i < t.length){
        if(mapS.has(s[i])){
            if(mapS.get(s[i]) !== t[i])return false;
        } else {
            mapS.set(s[i], t[i])
        }

        if(mapT.has(t[i])){
            if(mapT.get(t[i]) !== s[i]) return false
        } else {
            mapT.set(t[i], s[i])
        }
        i++
    }
    return true

};
let s = "paper", t = "title"
console.log(isIsomorphic(s,t));