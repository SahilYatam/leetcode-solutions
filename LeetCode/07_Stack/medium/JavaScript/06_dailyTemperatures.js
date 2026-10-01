// 739. Daily Temperatures

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function(temperatures) {
    let stack = []
    let ans = Array(temperatures.length).fill(0);

    for(let i = 0; i < temperatures.length; i++){

        while(stack.length !== 0){
            let top = stack.at(-1);
            
            if(temperatures[i] <= top[0]){
                break;
            }

            let warmDay = i - top[1]
            ans[top[1]] = warmDay;

            stack.pop();
        } 
        stack.push([temperatures[i], i])
    }
    
    return ans;
};

let temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

// let temperatures = [22,21,20]
// Output: [0,0,0]

console.log(dailyTemperatures(temperatures))

