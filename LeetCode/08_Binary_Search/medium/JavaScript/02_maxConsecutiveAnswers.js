// 2024. Maximize the Confusion of an Exam

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let right = 0, left = 0;
    let countT = 0, countF = 0;

    let maxLen = 0

    while(right < answerKey.length){
        
        if(answerKey[right] === "T"){
            countT++
        } else {
            countF++
        }

        right++


        while(right - left - Math.max(countT, countF) > k){
            if(answerKey[left] === "T"){
                countT--
            } else {
                countF--
            }
            left++
        }

        maxLen = Math.max(maxLen, right - left)
    }
    return maxLen
};


// let answerKey = "TTFF", k = 2
// Output: 4

// let answerKey = "TFFT", k = 1
// Output: 3

let answerKey = "TTFTTFTT", k = 1
// Output: 5

console.log(maxConsecutiveAnswers(answerKey, k))