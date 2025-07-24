// Prefix sum array

let arr = [2, 4, 6, 1, 3]
let newArr = []
let sum = 0
let index = 0
newArr.push(arr[index])
for (let i = 1; i < arr.length; i++) {
    sum = newArr[index] + arr[i]
    index++
    newArr[index] = sum
}
console.log(newArr)