/**
 * LeetCode question: 168. Excel Sheet Column Title
 */

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = "";

    while(columnNumber > 0){
        // Step 1: Adjust for 1-indexing
        columnNumber = columnNumber - 1;

        // Step 2: Get the last "digit" (0-25)
        let remainder = columnNumber % 26

        // Step 3: Convert to letter and add to front of result
        let letter = String.fromCharCode(65 + remainder);
        result = letter + result

        // Step 4: Move to next position (intger division)
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
};

console.log(convertToTitle(15))