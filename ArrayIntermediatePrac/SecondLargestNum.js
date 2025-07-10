function SecondLargest(nums){
    let max1 = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if(max1 < nums[i]){
            max1 = nums[i]
            console.log("max1: ",max1)
        }
    }
    let max2 = -Infinity
    for (let i = 0; i < nums.length; i++) {
        if(max2 < nums[i] && nums[i] < max1){
            max2 = nums[i]
            console.log("max2: ",max2)
        }
    }
    if(max2 === -Infinity){
        return max1
    }
    return max2
}

let nums = [-2,-3,-9,-4,-5,-1,5,5]
// let nums = [5,5,5]
let result = SecondLargest(nums)
console.log(result)