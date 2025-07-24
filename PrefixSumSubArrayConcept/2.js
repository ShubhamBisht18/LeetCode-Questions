// Sum of elements from index L to R

let arr = [2, 4, 6, 1, 3]
let L = 1, R = 3

let sum = 0
for (let i = L; i <= R; i++) {
    sum += arr[i]
}
console.log(sum)