function MinValue(nums){
    let min = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] < min){
            min = nums[i]
        }
    }
    return min
}

let nums = [5,8,3,6,9]
let result = MinValue(nums)
console.log(result)