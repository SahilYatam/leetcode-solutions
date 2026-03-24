/**
 * You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter.
 * 
 *  Example(Input1, Input2 --> Output):
 *      6, 10 --> 32
 *      3, 3 --> 9
 * 
 * Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
 * 
 */

/**
 * 
 * @param {number} l 
 * @param {number} w 
 * @return {number}
 */

// const areaOrPerimeter = (l, w) => {
//     let ans;
//     if(l === w){
//         ans = l * w;
//     } else {
//         ans = 2 * (l + w);
//     }
    
//     return ans;
// }

// Optimze and one liner
const areaOrPerimeter = (l, w) => {
    return l !== w ? (l + w) * 2 : l * w;
}

// const areaOrPerimeter = function(l , w) {
//   let area = l * w;
//   let perimeter = (l + w) * 2;
  
//   return l === w ? area : perimeter;
// };

console.log(areaOrPerimeter(6, 10));