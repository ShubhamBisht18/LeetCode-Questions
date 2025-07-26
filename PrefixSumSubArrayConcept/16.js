// Count subarrays where sum is divisible by K

let arr = [4, 5, 0, -2, -3, 1]
let K = 5

for (let i = 0; i < arr.length; i++) {
    let sum = 0
    for (let j = i; j < arr.length; j++) {
        sum += arr[j]
        if (((sum % K) + K) % K === 0) {
            console.log([i, j]);
        }

    }
}