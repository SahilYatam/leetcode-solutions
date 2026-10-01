// 84. Largest Rectangle in Histogram

/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function (heights) {
    let maxArea = 0;
    let stack = []; // pair: [index, height]

    for (let i = 0; i < heights.length; i++) {
        let h = heights[i];
        let start = i;

        while (stack.length !== 0 && stack.at(-1)[1] > h) {
            let [idx, height] = stack.pop();

            maxArea = Math.max(maxArea, height * (i - idx));
            start = idx;
        }

        stack.push([start, h]);
    }

    for (let [idx, h] of stack) {
        maxArea = Math.max(maxArea, h * (heights.length - idx));
    }

    return maxArea;
};


let heights = [2, 1, 5, 6, 2, 3];
// Output: 10

// let heights = [7, 1, 7, 2, 2, 4];
// Output: 8

console.log(largestRectangleArea(heights));
