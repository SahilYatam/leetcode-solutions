// 42. Trapping Rain Water

/**
 * @param {number[]} height
 * @return {number}
 */
// const trap = function(height) {
//     let ans = 0;

//     for(let i = 1; i < height.length; i++){

//         let left = 0
//         let leftArr = []
//         let rightArr = []

//         while(i > 0 && left < i){
//             leftArr.push(height[left])
//             left++
//         }

//         let right = height.length-1
//         while(i > 0 && right > i){
//             rightArr.push(height[right])
//             right--
//         }

//         let maxL = Math.max(...leftArr)
//         let maxR = Math.max(...rightArr)

//         let minVal = Math.min(maxL, maxR)
//         let water = minVal - height[i]
//         if(water > 0){
//             ans += water;
//         } else {
//             ans += 0
//         }
//     }

//     return ans
// };

/**
 * @param {number[]} height
 * @return {number}
 */

const trap = function (height) {
    const n = height.length;

    if (n <= 2) return 0;

    let leftMax = new Array(n);
    let rightMax = new Array(n);

    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    let ans = 0;

    for (let i = 1; i < n - 1; i++) {
        let water = Math.min(leftMax[i], rightMax[i]) - height[i];

        if (water > 0) {
            ans += water;
        }
    }

    return ans;
};

// let height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

let height = [4, 2, 0, 3, 2, 5];
// // Output: 9

console.log(trap(height));
