function Single(nums) {
    // Sort the array
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }

    // Collect unique elements
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
            let k = 0;
            while (arr[k] !== undefined) {
                k++;
            }
            arr[k] = nums[i];
        }
    }

    return arr;
}


let nums = [4, 3, 6, 1, 6, 4, 5, 3];
let result = Single(nums);
console.log(result); 
