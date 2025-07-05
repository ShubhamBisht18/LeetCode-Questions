// function rotate(nums, k) {
//     const n = nums.length;                         

//     function reverse(start, end) {
//         while (start < end) {
//             // swap the elements
//             [nums[start], nums[end]] = [nums[end], nums[start]];
//             start++;
//             end--;
//         }
//     }

//     reverse(0, n - 1);
//     reverse(0, k - 1);  
//     reverse(k, n - 1);  
    
// }

// let nums = [1,2,3,4,5,6,7]
// let k = 3
// let result = rotate(nums,k)
// console.log(result)

function rotate(nums, k) {
    const n = nums.length;
    k = k % n; // optional, but good for safety

    // Helper function to reverse elements between indices
    function reverse(start, end, arr) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    // Make a copy so original is not modified
    let arr = [...nums];

    reverse(0, n - 1, arr);     // Step 1: Reverse whole array
    reverse(0, k - 1, arr);     // Step 2: Reverse first k elements
    reverse(k, n - 1, arr);     // Step 3: Reverse the rest

    return arr;
}

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let result = rotate(nums, k);
console.log(result);  // [5, 6, 7, 1, 2, 3, 4]
