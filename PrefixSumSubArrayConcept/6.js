// Count subarrays with sum equal to K

let arr = [5,4,-1,3,-6,9,8]
let k = 3
let count  = 0
for (let i = 0; i < arr.length; i++) {
    let sum = 0
    for (let j = i; j < arr.length; j++) {
        sum += arr[j]
        if (sum === k) {
        count++
    }
    }
    
}

console.log(count)