// Left rotate array by 1

let arr = [1, 2, 3, 4, 5]
// let arr = ['a','b','c','d','e']

let newArr = []
let index = 0 
store = arr[0]
for (let i = 1; i <= arr.length - 1; i++) {
    newArr[index] = arr[i]
    index++
}
newArr[index] = store

console.log(newArr)