// let arr = [2, 1, 5, 1, 3, 2];
// let k = 3;

// let sum = 0;
// let maxSum = 0;

// // First window sum
// for (let i = 0; i < k; i++) {
//     sum += arr[i];
// }
// maxSum = sum;

// // Slide the window
// for (let i = k; i < arr.length; i++) {
//     sum += arr[i] - arr[i - k]; // add new element, remove old
//     maxSum = Math.max(maxSum, sum);
// }

// console.log("Max sum:", maxSum);



let arr = [1, 2, 1, 0, 1, 1, 0]
let K = 4
let sum = 0
let maxLength = 0
let i = 0
let j = 0
for ( i = 0; i < arr.length; i++) {
    sum += arr[i]

    while(sum > K){
        sum -= arr[j]
        j++
    }
    maxLength = Math.max(maxLength, i - j + 1);
}
console.log(maxLength)
