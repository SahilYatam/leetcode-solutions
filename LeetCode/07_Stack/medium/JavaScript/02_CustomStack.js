// 1381. Design a Stack With Increment Operation

/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack = []
    this.inc = new Array(maxSize).fill(0)
    this.maxSize = maxSize
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.stack.length < this.maxSize){
        this.stack.push(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    let size = this.stack.length

    if(size === 0) return -1;

    let topIndex = size - 1;

    let value = this.stack.pop() + this.inc[topIndex]

    // passing increment downward
    if(topIndex > 0){
        this.inc[topIndex - 1] += this.inc[topIndex]
    }
    this.inc[topIndex] = 0

    return value
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    let size = this.stack.length
    
    if(size === 0) return;

    let index = Math.min(k, size) -1

    if(index >= 0){
        this.inc[index] += val
    }
};

let maxSize = 5
let stack = new CustomStack(maxSize)
stack.push(1)
stack.push(2)
stack.push(3)
let popVal = stack.pop()
stack.push(4)

console.log(stack)
console.log("Pop Val: ", popVal)

