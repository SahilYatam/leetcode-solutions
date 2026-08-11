// 3206. Alternating Groups I

/**
 * @param {number[]} colors
 * @return {number}
 */
const numberOfAlternatingGroups = (colors) => {
    let altGroup = 0
    let n = colors.length

    for(let i = 0; i < n; i++){
        let left = (i - 1 + n) % n
        let right = (i + 1) % n

        if(colors[i] !== colors[left] && colors[i] !== colors[right]){
            altGroup++
        }
    }
    
    return altGroup
};

// let colors = [1,1,1]
// Output: 0

let colors = [0,1,0,0,1]
// Output: 3

console.log(numberOfAlternatingGroups(colors))