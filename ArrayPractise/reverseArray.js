function revArray(nums){
    let rev = []
    let index = 0
    for (let i = nums.length-1; i >= 0 ; i--) {
        rev[index] = nums[i]
        index++
    }
    return rev
}
let nums = [3,2,1]
let result = revArray(nums)
console.log(result)