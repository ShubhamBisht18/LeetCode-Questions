// Total number of continuous subarrays of length K

let arr = [1,2,3,4,5]
let k = 3
let count = 0
for (let i = 0; i < arr.length; i++) {
    let sum = []
    let index = 0
    for (let j = i; j < arr.length; j++) {
        sum[index] = arr[j]
        index++
        if(sum.length === k){
            count++
            break
        }
    }
}
console.log(count)