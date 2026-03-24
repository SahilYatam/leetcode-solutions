/**
 * 605. Can Place Flowers
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
    for(let i = 0; i < flowerbed.length; i++){
        if(
            flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length -1 || flowerbed[i + 1] === 0)
        ){
            flowerbed[i] = 1;
            n--;
            if(n === 0){
                return true
            }
        }
    }
    return n === 0
};

let flowerbed = [1,0,0,0,1], n = 2
// Output: true
console.log(canPlaceFlowers(flowerbed, n))