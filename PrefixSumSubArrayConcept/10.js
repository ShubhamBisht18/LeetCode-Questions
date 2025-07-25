// Subarray with given sum (positive numbers only)

let arr = [1, 2, 3, 7, 5]
let k = 12

for (let i = 0; i < arr.length; i++) {
    let sum = 0
    for (let j = i; j < arr.length; j++) {
        sum+= arr[j]
        if(sum === k){
            console.log([i,j])
        }
    }
}