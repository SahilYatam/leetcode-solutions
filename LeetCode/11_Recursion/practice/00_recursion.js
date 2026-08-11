
// const printNums = (n) => {
//     if(n === 0){
//         return;
//     }
//     console.log(n)
//     printNums(n-1)
// }

const printNums = (num) => {
    if(num === 0) return [];
    
    return [num, ...printNums(num-1)]
}

console.log(printNums(4))