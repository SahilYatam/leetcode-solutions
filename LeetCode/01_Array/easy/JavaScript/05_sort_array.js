/**
 * Array Question: Sort an array to ascending order
 * Input → [9, 1, 2, 4, 0, -1, 15, -15]
 * Expected output → [-15, -1, 0, 1, 2, 4, 9, 15]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const sortArr = (nums) => {
    let swap = [];
    for(let i = 0; i < nums.length -1; i++){
        let left = 0;
        let right = 1;
        console.log("Outer Loop left: ",left);
        console.log("Outer Loop right: ",right);
        for (let j = 0; j < nums.length -1; j++){
            if(nums[left] > nums[right]){
                swap = nums[left];
                nums[left] = nums[right];
                nums[right] = swap;
                left++;
                right++;
                console.log("Iner Loop left: ",left);
                console.log("Iner Loop right: ",right);
            } else if(nums[left] < nums[right]){
                left++;
                right++;
            }
        }
    }
    return nums;
}

const arr = [9, 1, 2, 4, 0, -1, 15, -15];
console.log(sortArr(arr));