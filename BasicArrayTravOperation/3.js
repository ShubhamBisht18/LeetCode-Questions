// Find the minimum number in array

let arr = [3,5,18,2,10,7,9]

let min = arr[0]
for (let i = 0; i < arr.length; i++) {
    if(min > arr[i]){
        min = arr[i]
    }
}

console.log(min)