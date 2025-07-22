// Check if array is sorted

let arr = [1,2,3,4,4,5]
let ans = true

for(let i = 1; i < arr.length; i++) {
    if(arr[i-1] > arr[i]){
        ans = false
    }
}
console.log(ans)