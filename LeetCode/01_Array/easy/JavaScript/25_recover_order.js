// 3668. Restore Finishing Order

/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
// const recoverOrder = (order, friends) => {
//     let fSet = new Set(friends)
//     let result = []

//     for(let i = 0; i < order.length; i++){
//         if(fSet.has(order[i])){
//             result.push(order[i])
//         }
//     }
//     return result
// };

const recoverOrder = (order, friends) => {
    let fSet = new Set(friends)
    return order.filter(item => fSet.has(item))
};

// let order = [3,1,2,5,4], friends = [1,3,4]
// Output: [3,1,4]

let order = [1,4,5,3,2], friends = [2,5]
// Output: [5,2]

console.log(recoverOrder(order, friends));