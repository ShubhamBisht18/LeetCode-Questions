// Maximum average subarray (fixed size window)

let arr = [1, 12, -5, -6, 50, 3]
let k = 4
let max = -Infinity
for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0
    let temp
    for (let j = i; j < i + k; j++) {
        sum+= arr[j]
    }
    temp = sum / k
    if(max < temp){
        max = temp
    }
}
console.log(max)