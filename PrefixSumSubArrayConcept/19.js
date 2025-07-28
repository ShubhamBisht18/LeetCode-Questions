// Count number of subarrays with average ≥ threshold

let arr = [2, 1, 3, 4, 1]
let k = 2
let threshold = 3
let count = 0
for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0
    for (let j = i; j < i + k; j++) {
        sum += arr[j]

    }
    if (sum / k >= threshold) {
        count++
    }
}
console.log(count)