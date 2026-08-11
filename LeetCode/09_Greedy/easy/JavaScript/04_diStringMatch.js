// 942. DI String Match

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let n = s.length;
    let low = 0, high = s.length;
    let result = []

    for(let i = 0; i < n+1; i++){
        if(i === n || s[i] === "I"){
            result.push(low)
            low++
        } else {
            result.push(high)
            high--
        }
    }
    return result
};

let s = "IDID"
// Output: [0,4,1,3,2]

// let s = "DDI"
// Output: [3,2,0,1]

console.log(diStringMatch(s))

