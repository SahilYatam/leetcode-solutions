// 500. Keyboard Row

/**
 * @param {string[]} words
 * @return {string[]}
 */

const findWords = (words) => {
    const firstRow = new Set("qwertyuiop");
    const secondRow = new Set("asdfghjkl");
    const thirdRow = new Set("zxcvbnm");

    let result = []
    let targetRow;

    for (let word of words) {
        const lowercase_word = word.toLowerCase()
        let is_valid = true
        const first_char = lowercase_word[0]

        if(firstRow.has(first_char)){
            targetRow = firstRow
        }
        else if(secondRow.has(first_char)){
            targetRow = secondRow
        } else if(thirdRow.has(first_char)){
            targetRow = thirdRow
        }

        for(let char of lowercase_word){
            if(!targetRow.has(char)){
                is_valid = false
                break
            }
        }

        if(is_valid){
            result.push(word)
        }
    }
    return result
};


// let words = ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska","Dad"]

// let words = ["omk"]
// Output: []

let words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]

console.log(findWords(words))