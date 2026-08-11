// 763. Partition Labels

/**
 * @param {string} s
 * @return {number[]}
 */

var partitionLabels = function(s) {
    let hash_map = new Map()
    let result = []

    let start = 0, end = 0;

    for(let i = 0; i < s.length; i++){
        hash_map.set(s[i], i)
    }

    for(let i = 0; i < s.length; i++){
        end = Math.max(end, hash_map.get(s[i]))

        if(i === end){
            let size = end - start + 1
            result.push(size)
            start = i + 1
        }
    }

    return result
};

let s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]

// let s = "eccbbbbdec"
// Output: [10]

console.log(partitionLabels(s))

