// Merge two sorted arrays

let arr1 = [1, 3, 5]
let arr2 = [2, 4, 6]

let i = 0
let j = 0
let arr = []
let index = 0
while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
        arr[index] = arr1[i]
        i++
        index++
    }else{
        arr[index] = arr2[j]
        j++
        index++
    }
    
}

console.log(arr)