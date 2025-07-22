// Insert an element at a specific index

let arr = [10, 20, 30, 40]
let value = 25
indexNo = 2
let index = 0
let newArr = []
for (let i = 0; i < arr.length; i++) {
    newArr[index] = arr[i]
    index++
    if(index === indexNo){
        newArr[index] = value
        index++
    }
    
}
console.log(newArr)