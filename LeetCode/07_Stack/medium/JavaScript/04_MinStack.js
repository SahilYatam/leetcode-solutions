// 155. Min Stack

class MinStack {
    constructor() {
        this.valstack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.valstack.push(val)
        
        if(this.minStack.length === 0){
            this.minStack.push(val)
        } 
        else if(val < this.minStack.at(-1)){
            this.minStack.push(val)
        }
        else {
            let topVal = this.minStack.at(-1)
            this.minStack.push(topVal)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.valstack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.valstack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.at(-1)
    }
}

let minStack = new MinStack()
minStack.push(1)
minStack.push(2)
minStack.push(-3)
minStack.push(4)


minStack.pop()
minStack.pop()

let top = minStack.top()
console.log(top)


let minVal = minStack.getMin()
console.log("minVal: ", minVal)