// 2375. Construct Smallest Number From DI String

/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    let n = pattern.length
    let temp = [], result = []

    for(let i = 0; i < n + 1; i++){
        temp.push(i+1)

        if(i === n || pattern[i] === "I"){
            while(temp != 0){
                result.push(temp.pop())
            }
        }
    }
    
    return result.join("")
};

let pattern = "IIIDIDDD"
// Output: "123549876"

// let pattern = "DDD"
// Output: "4321"

console.log(smallestNumber(pattern))

