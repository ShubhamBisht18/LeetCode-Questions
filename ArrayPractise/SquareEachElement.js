function Square(nums){
    let arr = []
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        arr[index] = nums[i] ** 2
        index++
    }
    return arr
}

let nums = [2,3,4,5]
let result = Square(nums)
console.log(result)