// 3304. Find the K-th Character in String Game I
/**
 * @param {string} char
 * @return {character}
 */
function NextAlphabet(char){
    let val = char.charCodeAt(0)
    return String.fromCharCode(val+1)
}

/**
 * @param {number} k
 * @return {character}
 */
const kthCharacter = function(k) {
    let length = 1
    while(length < k){
        length = length * 2
    }

    function findCharacter(length, k){
        if(length === 1) return "a";
        
        let half = length / 2;

        if(k <= half){
            return findCharacter(half, k)
        }

        else{
            let ch = findCharacter(half, k - half)
            return NextAlphabet(ch)
        }
    }
    return findCharacter(length, k)
};

let k = 5
// Output: "b"

// let k = 10
// Output: "c"

console.log(kthCharacter(k))
