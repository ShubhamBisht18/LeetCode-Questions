function TwoSum(nums,target) {
    for(let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
}
let nums = [2,7,11,15]
let target = 13
const val = new TwoSum(nums,target)
console.log(val)