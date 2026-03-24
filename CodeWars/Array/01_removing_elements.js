/**
 * Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
 * 
 * Example:
 *  Input: ["Keep", "Remove", "Keep", "Remove", "Keep", ...]
 *  Output: ["Keep", "Keep", "Keep", ...]
 * 
 */

/**
 * @param {string[]} arr
 * @return {string[]}
 */

const removingElements = (arr) => {
    let result = [];

    // for(let i = 0; i < arr.length; i++){
    //     if(i % 2 === 0){
    //         result.push(arr[i]);
    //     }
    // }

    for(let i = 0; i < arr.length; i += 2){
        result.push(arr[i]);
    }

    return result;
}

const arr = ["Keep", "Remove", "Keep", "Remove", "Keep"];
console.log(removingElements(arr));
