function OddNum(nums){
    let arr = []
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 !== 0){
            arr[index]  = nums[i]
            index++
        }
    }
    return arr
}

let nums = [2,3,5,6,8,9,11]
let result = OddNum(nums)
console.log(result)