// Kadane’s Algorithm (max subarray sum)

// let arr = [1, -2, 3, 4, -1]

// let currentSum = 0
// let maxSum = 0
// for (let i = 0; i < arr.length; i++) {
//     currentSum += arr[i]
//     if(currentSum < 0){
//         currentSum = 0
//     }
//     if(currentSum > maxSum){
//         maxSum = currentSum
//     }
// }

// console.log(maxSum)


let nums = [-6,-10,-5,-9,-7]

let currentSum = nums[0]
let maxSum = nums[0]
for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i])
    maxSum = Math.max(currentSum, maxSum)
}

console.log(maxSum)