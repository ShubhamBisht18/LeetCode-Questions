function CountEven(nums){
    let count = 0 
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0){
            count++
        }
    }
    return count
}

let nums = [1,4,6,9]
let result = CountEven(nums)
console.log(result)