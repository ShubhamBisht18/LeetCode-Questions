function duplicateFirst(nums){
    let dup = new Set(nums)
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (dup !== nums[i]) {
            result.push(nums[i])
        }
    }
    return result
}

let nums = [2, 5, 1, 2, 3, 5]
let result = duplicateFirst(nums)
console.log(result)