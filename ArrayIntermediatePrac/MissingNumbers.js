// function MissingNum(nums) {
//     let arr = [];

//     for (let i = 1; i < nums.length; i++) {

//         let prev = nums[i - 1];
//         let curr = nums[i];

//         // Check for gap between prev and curr
//         while (curr - prev > 1) {
//             prev++;
//             arr.push(prev);
//         }
//     }

//     return arr;
// }

// let nums = [1,2,4,5]
// let result = MissingNum(nums)
// console.log(result)


function MissingNum(nums) {
    let arr = [];

    if (nums.length === 0) return arr;

    arr.push(nums[0]); // Always include the first number
    console.log("1st:",arr)

    for (let i = 1; i < nums.length; i++) {
        let prev = nums[i - 1];
        let curr = nums[i];

        // Fill in missing numbers
        while (curr - prev > 1) {
            prev++;
            arr.push(prev);
            console.log("2nd: ",arr)
        }

        // Always include current number
        console.log("third:",arr)
        arr.push(curr);
    }

    return arr;
}

let nums = [1, 2, 4, 5];
let result = MissingNum(nums);
console.log(result); // [1, 2, 3, 4, 5]
