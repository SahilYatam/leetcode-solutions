// 11. Container With Most Water

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let ans = 0
    let left = 0, right = height.length-1;

    while(left < right){
        let width = right-left
        let curr_height = Math.min(height[left], height[right])

        let max_area = curr_height * width

        ans = Math.max(ans, max_area)

        if(height[left] < height[right]){
            left++
        } else{
            right--
        }
    }

    return ans
};

let height = [1,7,2,5,4,7,3,6]
// Output: 36

// let height = [2,2,2]
// Output: 36

console.log(maxArea(height))