// function Rotate(nums, k){
//     let n = nums.length - k
//     k = k % n
//     if(nums.length < k){
//         return nums
//     }
//     let value1 = nums.slice(n)
//     let value2 = nums.slice(0,n)
//     let result = value1.concat(value2)
//     return result
// }

// let nums = [1,2,3,4,5,6,7]
// let k = 3
// let result = Rotate(nums,k)
// console.log(result)

function reverse(arr, start, end){
    while(start < end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
}
function Rotate(nums, k){
    let n = nums.length;
    k = k % n;
    reverse(nums,0,n-1)
    reverse(nums,0,k-1)
    reverse(nums,k,n-1)
    return nums
}

let nums = [1,2,3,4,5,6,7]
let k = 3

let result = Rotate(nums, k)
console.log(result)
