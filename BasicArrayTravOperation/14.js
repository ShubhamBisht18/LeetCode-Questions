// Left rotate array by K

let arr = [1, 2, 3, 4, 5]
let k = 2

function KRotate(arr , k, count) {
    if(count === k) return arr
    let newArr = []
    let index = 0
    store = arr[0]
    for (let i = 1; i <= arr.length - 1; i++) {
        newArr[index] = arr[i]
        index++
    }
    newArr[index] = store
    count++
    return KRotate(newArr,k,count)
}
let result = KRotate(arr, k, 0)
console.log(result)
