// Largest subarray sum (brute force)


let arr = [1, -2, 3, 4, -1];
let maxSum = 0

for (let i = 0; i < arr.length; i++) {
    let sum = 0; 
    for (let j = i; j < arr.length; j++) {
        sum += arr[j]; 
        if (sum > maxSum) {
            maxSum = sum; 
        }
    }
}

console.log("Maximum Subarray Sum:", maxSum);