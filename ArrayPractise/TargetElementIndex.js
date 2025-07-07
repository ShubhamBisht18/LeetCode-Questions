function TargetIndex(nums,target){
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === target){
            return i
        }
    }
    return "Not Found"
}

let nums = [9,8,7,5,6]
let target = 5
let result = TargetIndex(nums,target)
console.log(result)