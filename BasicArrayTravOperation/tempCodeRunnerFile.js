// Count frequency of an element

let arr = [5, 3, 9, 5, 10, 5]
let k = 5
let count = 0
for (let i = 0; i < arr.length; i++) {
    if(k === arr[i]){
        count++
    }
}

console.log(count, k)