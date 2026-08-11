// 744. Find Smallest Letter Greater Than Target

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let st = 0
    let end = letters.length -1

    let ans = null

    while(st <= end){
        let mid = Math.floor(st + (end - st) / 2)

        if(letters[mid] > target){
            ans = letters[mid]
            end = mid - 1
        }
        else{
            st = mid + 1
        }
    }

    if(ans !== null){
        return ans
    }
    
    return letters[0]
};


let letters = ["c","f","j"], target = "a"
// Output: "c"

// let letters = ["c","f","j"], target = "c"
// Output: "f"

// let letters = ["x","x","y","y"], target = "z"
// Output: "x"

console.log(nextGreatestLetter(letters, target))
