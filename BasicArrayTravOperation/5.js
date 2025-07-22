// Calculate average of elements

let arr = [3,5,18,2,10,7,9]

let sum = 0
let average
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    average = sum / arr.length
}

console.log(average)