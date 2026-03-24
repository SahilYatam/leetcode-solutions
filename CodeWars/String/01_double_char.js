/**
 * Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
 * 
 * Examples (Input -> Output):
 *    "String"      -> "SSttrriinngg"
 *    "Hello World" -> "HHeelllloo  WWoorrlldd"
 *    "1234!_ "     -> "11223344!!__ 
 * 
 */

/**
 * @param {string} str
 * @return {string}
 */

// const doubleChar = (str) => {
//     let result = "";
//     for(let i = 0; i < str.length; i++){
//         result += str[i] + str[i];
//     }
//     return result
// }

const doubleChar = (str) => {
    return str.split('').map((char) => {
        return char + char
    }).join("");
}

const str = "String"
console.log(doubleChar(str))