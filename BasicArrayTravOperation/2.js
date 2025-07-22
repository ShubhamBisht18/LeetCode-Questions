// 	Find the maximum number in array

let arr = [3,5,18,2,10,7,9]

let max = arr[0]
for (let i = 0; i < arr.length; i++) {
    if(max < arr[i]){
        max = arr[i]
    }
}
console.log(max)