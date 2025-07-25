// Find total number of subarrays

let arr = [1, -2, 3, 4, -6, 9]
let currentSum = arr[0]
let maxSum = arr[0]
let totalSubarray = 0
for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i])
    maxSum = Math.max(currentSum, maxSum)
    totalSubarray = (arr.length *(arr.length + 1))/2
}

console.log(totalSubarray, maxSum)
