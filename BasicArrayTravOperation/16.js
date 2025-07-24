// Delete an element at a specific index

let arr = [5,3,9,10,15]
let k = 3
let newArr = []
let index = 0
for (let i = 0; i < arr.length; i++) {
    if (i === k) continue; // skip the index to delete
    newArr[index] = arr[i]
    index++
}

console.log(newArr)

