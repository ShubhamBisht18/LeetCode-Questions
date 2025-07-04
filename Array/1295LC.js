function findNumbers(nums){
    count = 0
   for (let i = 0; i < nums.length; i++) {
        let str = String(nums[i])
        let digit = str.length
        if(digit%2 === 0){
            count++
        }
    }
    return count

}

let nums = [12,345,2,6,7891]
const result = findNumbers(nums)
console.log(result)