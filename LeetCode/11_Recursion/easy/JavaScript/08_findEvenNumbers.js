// 2094. Finding 3-Digit Even Numbers

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const findEvenNumbers = function(digits) {
    let result = new Set()

    function backtrack(path, used){
        if(path.length === 3){
            let num = path[0] * 100 + path[1] * 10 + path[2];

            if(num % 2 === 0){
                result.add(num)
            }
            return;
        }

        for(let i = 0; i < digits.length; i++){
            if(used[i]) continue;

            // Leading zero not allowed
            if(path.length === 0 && digits[i] === 0) continue;

            used[i] = true;
            path.push(digits[i])

            backtrack(path, used)

            path.pop()
            used[i] = false
        }

    }

    let used = Array(digits.length).fill(false)
    backtrack([], used)

    return Array.from(result).sort((a, b) => a-b)
};

let digits = [2,1,3,0]
// Output: [102,120,130,132,210,230,302,310,312,320]

// let digits = [2,2,8,8,2]
// Output: [222,228,282,288,822,828,882]

// let digits = [3,7,5]
// Output: []

console.log(findEvenNumbers(digits))