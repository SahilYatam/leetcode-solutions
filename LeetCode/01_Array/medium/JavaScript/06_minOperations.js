// 1769. Minimum Number of Operations to Move All Balls to Each Box

const minOperations = (boxes) => {
    let n = boxes.length
    let result = new Array(n).fill(n)
    let leftCount = 0
    let rightCount = 0
    let cost = 0

    for(let i = 0; i < n; i++){
        if(boxes[i] === "1"){
            rightCount++
            cost += i
        }
    }

    result[0] = cost

    for(let i = 1; i < n; i++){
        if(boxes[i - 1] === "1"){
            leftCount++
            rightCount--
        }
        result[i] = result[i - 1] + leftCount - rightCount
    }
    

    return result
}

/**
// Brute force
const minOperations = (boxes) => {
    let n = boxes.length
    let result = new Array(n).fill(n)

    for(let i = 0; i < n; i++){
        let cost = 0
        for(let j = 0; j < n; j++){
            if(boxes[j] === "1"){
                cost += Math.abs(i - j)
            }
        }
        result[i] = cost
    }
    return result
}
 */

// let boxes = "110"
// Output: [1,1,3]

let boxes = "001011"
// Output: [11,8,5,4,3,4]

console.log(minOperations(boxes))
