function Duplicate(nums) {
    let index = 0
    let arr = [nums[index]]; 

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== arr[index]) {
            index++
            arr[index] = nums[i];
        }
    }

    return arr;
}

let nums = [1, 1, 2, 2, 3, 4, 4];
let result = Duplicate(nums);
console.log(result); 

