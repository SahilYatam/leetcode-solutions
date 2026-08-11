// 1441. Build an Array With Stack Operations


/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result = []
    let pointer = 0

    for(let num = 1; num <= n; num++){
        if(pointer < target.length && num === target[pointer]){
            result.push("Push")
            pointer++
        }
        else{
            result.push("Push")
            result.push("Pop")
        }
        if(pointer === target.length){
            break
        }
    }

    return result
};

let target = [1,3], n = 3
// Output: ["Push","Push","Pop","Push"]

// target = [1,2,3], n = 3
// Output: ["Push","Push","Push"]

// target = [1,2], n = 4
// Output: ["Push","Push"]

console.log(buildArray(target, n))
