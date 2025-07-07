function CalAverage(nums){
    let sum = 0
    let ans
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        ans = sum / nums.length
    }
    return ans
}

let nums = [1,2,3,4]
let result = CalAverage(nums)
console.log(result)