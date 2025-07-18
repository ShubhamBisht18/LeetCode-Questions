function TwoSum(nums, k){
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if(nums[i] + nums[j] === k){
                arr.push([i,j])
            }
        }
    }
    return arr
}

let nums = [5,3,4,6,3,9,10]
let k = 9
let result = TwoSum(nums, k)
console.log(result)