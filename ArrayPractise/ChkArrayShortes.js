function sorted(nums){
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[i+1]){
            return true
        }
    }
    return false
}

let nums = [1,2,5,4,3]
let result = sorted(nums)
console.log(result)