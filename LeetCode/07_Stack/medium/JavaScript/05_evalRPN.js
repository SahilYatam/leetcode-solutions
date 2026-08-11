// 150. Evaluate Reverse Polish Notation

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        switch (tokens[i]) {
            case "+": {
                let fEle = stack.pop();
                let sEle = stack.pop();

                stack.push(sEle + fEle);
                break;
            }

            case "-": {
                let fEle = stack.pop();
                let sEle = stack.pop();

                stack.push(sEle - fEle);

                break;
            }

            case "*": {
                let fEle = stack.pop();
                let sEle = stack.pop();

                stack.push(sEle * fEle);
                break;
            }

            case "/": {
                let fEle = stack.pop();
                let sEle = stack.pop();
                let ans = Math.trunc(sEle / fEle)
                stack.push(ans);

                break;
            }
            default:
                let num = Number(tokens[i]);
                stack.push(num);
                break;
        }
    }
    // console.log(stack.length)
    return stack[0];
};

// let tokens = ["2", "1", "+", "3", "*"];
// Output: 9

let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22


console.log(evalRPN(tokens));
