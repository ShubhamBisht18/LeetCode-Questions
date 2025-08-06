// Remove duplicates from sorted array

// let arr = [1, 1, 2]
let arr = [0,0,1,1,1,2,2,3,3,4]
let index = 0
for (let i = 0; i < arr.length; i++) {
    if(arr[index] !== arr[i]){
        index++
        arr[index] = arr[i]
    }
}

console.log(arr.slice(0,index+1))