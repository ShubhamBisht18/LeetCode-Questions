function MissingNum(nums) {
    let arr = [];

    for (let i = 1; i < nums.length; i++) {

        let prev = nums[i - 1];
        let curr = nums[i];

        // Check for gap between prev and curr
        while (curr - prev > 1) {
            prev++;
            arr.push(prev);
        }
    }

    return arr;
}

let nums = [1,2,4,5]
let result = MissingNum(nums)
console.log(result)