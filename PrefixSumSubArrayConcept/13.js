// Check if a prefix of array sums to K

let arr = [1, 5, 3, 6, 9]
let k = 15

let first = arr[0]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if(sum === k){
        console.log([0, i])
        break
    }
}