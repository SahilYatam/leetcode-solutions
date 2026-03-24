// 917. Reverse Only Letters

/**
 * @param {string} char
 * @return {boolean}
 */

function isLetter(char) {
    if(char.length !== 1){
        return false
    }

    let asciiValue = char.charCodeAt(0)

    let uppercase = (asciiValue >= 65 && asciiValue <= 90)
    let lowercase = (asciiValue >= 97 && asciiValue <= 122)

    if(uppercase || lowercase){
        return true
    }

    return false
}

/**
 * @param {string} s
 * @return {string}
 */

const reverseOnlyLetters = (s) => {
    let arr = s.split('')
    let left = 0;
    let right = arr.length -1

    while(left < right){
        let leftChar = arr[left]
        let rightChar = arr[right]

        let isLeftLetter = isLetter(leftChar)
        let isRightLetter = isLetter(rightChar)

        if(isLeftLetter && isRightLetter){
            // swap
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
        else if(!isLeftLetter){
            left++
        } else{
            right--
        }

    }
    
    return arr.join('')
};


// let s = "ab-cd"
// Output: "dc-ba"

// let s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

let s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

console.log(reverseOnlyLetters(s))