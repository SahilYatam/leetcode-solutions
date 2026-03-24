// 557. Reverse Words in a String III

/**
 * @param {string} s
 * @return {string}
 */

const reverseWords = (s) => {
    let arrStr = s.split('')

    let i = 0

    while (i < arrStr.length) {
        if (arrStr[i] === ' ') {
            i++
            continue
        }

        let j = i

        while (j < arrStr.length && arrStr[j] !== ' ') {
            j++
        }

        let left = i
        let right = j - 1

        while (left < right) {
            let temp = arrStr[left]
            arrStr[left] = arrStr[right]
            arrStr[right] = temp

            left++
            right--
        }

        i = j
    }

    return arrStr.join('')
};

let s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// let s = "Mr Ding"
// Output: "rM gniD"

console.log(reverseWords(s))
