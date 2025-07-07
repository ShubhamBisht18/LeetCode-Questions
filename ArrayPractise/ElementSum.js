function sumElemets(nums){
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum
}

let nums = [2,4,9]
let result = sumElemets(nums)
console.log(result)