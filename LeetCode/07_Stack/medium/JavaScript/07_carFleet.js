// 853. Car Fleet

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = function(target, position, speed) {
    const pair = position.map((p, i) => [p, speed[i]]);
    pair.sort((a,b) => b[0] - a[0]);

    let stack = [];

    for(const [p, s] of pair){
        stack.push([target - p] / s);

        if(stack.length >= 2 && stack.at(-1) <= stack.at(-2)){
            stack.pop()
        }
    }

    return stack.length;
};

// let target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3];
// Output: 3

let target = 100, position = [0,2,4], speed = [4,2,1]
// Output: 1

console.log(carFleet(target, position, speed))
