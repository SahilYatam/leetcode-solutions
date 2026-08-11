// 1282. Group the People Given the Group Size They Belong To

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let hashMap = new Map();
    let result = [];

    for(let i = 0; i < groupSizes.length; i++){
        let size = groupSizes[i];
        
        if(hashMap.has(size)){
            hashMap.get(size).push(i)
        } else {
            hashMap.set(size, [i])
        }
    }

    for(let [size, ppl_list] of hashMap.entries()){
        for(let start = 0; start < ppl_list.length; start += size){
            let group = ppl_list.slice(start, start + size)
            result.push(group)
        }
    }

    return result
};

let groupSizes = [3,3,3,3,3,1,3]
// Output: [[5],[0,1,2],[3,4,6]]

// let groupSizes = [2,1,3,3,3,2]
// Output: [[1],[0,5],[2,3,4]]

console.log(groupThePeople(groupSizes))

