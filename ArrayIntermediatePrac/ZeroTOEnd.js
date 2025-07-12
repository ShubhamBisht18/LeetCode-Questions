function ZeroToEnd(nums) {
    let value = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            value.push(nums[i])
        }
    }
    let count = nums.length - value.length
    for (let i = 0; i < count; i++) {
        value.push(0)
    }
    return value
}

let nums = [0, 1, 0, 3, 12]
let result = ZeroToEnd(nums)
console.log(result)