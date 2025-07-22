// Remove duplicates from sorted array

let arr = [1, 1, 2, 2, 3, 4, 4]

let ans = []
let index = 0
for (let i = 0; i <= arr.length; i++) {
   if(arr[i] !== arr[i+1]){
    ans[index] = arr[i]
    index++
   }
}
console.log(ans)