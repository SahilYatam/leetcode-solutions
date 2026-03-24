/**
 * LeetCode Question: 13. Roman to Integer 
 */

/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = (s) => {
    let map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);

    let result = 0;

    for(let i = 0; i < s.length; i++){
        let currentValue = map.get(s[i]);

        if(i !== s.length -1){
            let nextValue = map.get(s[i+1]);

            if(currentValue < nextValue){
                result -= currentValue;
            } else {
                result += currentValue
            }
        } else {
            // Last character, Just add it
            result += currentValue
        }

    }

    return result
};

const s = "MCMXCIV";
console.log(romanToInt(s))