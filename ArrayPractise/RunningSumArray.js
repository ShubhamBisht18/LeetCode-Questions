function RunningSumArray(nums){
    let arr = []
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        arr.push(sum)
    }
    return  arr
}

let nums = [1,3,5]
let result = RunningSumArray(nums)
console.log(result)