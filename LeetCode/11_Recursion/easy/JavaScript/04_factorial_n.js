
function factorialOfN (n){
    if(n===1){
        return 1
    }
    return n * factorialOfN(n-1);
}

console.log(factorialOfN(3))