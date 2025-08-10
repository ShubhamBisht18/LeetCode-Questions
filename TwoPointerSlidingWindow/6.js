// Remove all occurrences of a value

let arr = [3, 2, 2, 3]
let val = 3

let index = 0
for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== val){
        arr[index] = arr[i]
        index++
    }
}
console.log(arr.slice(0,index))