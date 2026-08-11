/**
 * LeetCode Question: 125. Valid Palindrome
 */

/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = (s) => {
  let str = s
    .toLowerCase()
    .split("")
    .filter((char) => /[a-z0-9]/i.test(char))
    .join("");
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

// const isPalindrome = (s) => {
//     let cleanString =  s.toLowerCase().replace(/[^a-z0-9]/g, '')

//     let reversed = cleanString.split('').reverse().join('');
//     return cleanString === reversed;
// };

const s = "Was it a car or a cat I saw?";
// output: true

// const s = "tab a cat"
// output: false
console.log(isPalindrome(s));
