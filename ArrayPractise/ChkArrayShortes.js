function sorted(nums){
    for (let i = 0; i < nums.length - 1; i++) {
        if(nums[i]+1 !== nums[i+1]){
            return false
        }
    }
    return true
}

let nums = [1,2,3,4,5]
let result = sorted(nums)
console.log(result)