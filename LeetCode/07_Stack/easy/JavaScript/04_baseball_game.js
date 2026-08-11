// 682. Baseball Game

/**
 * @param {string[]} operations
 * @return {number}
 */

const calPoints = (operations) => {
    let stack = []
    let total = 0
    
    for(let op of operations){
        if(op === "+"){
            let val = stack[stack.length - 1] + stack[stack.length - 2]
            stack.push(val)
            total += val
        }
        else if(op === "D"){
            let val = 2 * stack[stack.length - 1]
            stack.push(val)
            total += val
        }
        else if(op === "C"){
            let val = stack.pop()
            total -= val
        }
        else {
            let val = Number(op)
            stack.push(val)
            total += val
        }
    }

    return total
};

// let ops = ["5","2","C","D","+"]
// Output: 30

let ops = ["5","-2","4","C","D","9","+","+"]
// Output: 27

// let ops = ["1","C"]
// Output: 0

console.log(calPoints(ops))
