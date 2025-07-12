function Duplicate(nums){
    let arr = []
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] === nums[j]){
                for (let k = 0; k < index; k++) {
                    arr[k] = nums[i]
                    index++
                }
            }
        }
    }
    
    return arr
}

let nums = [1, 1, 2, 2, 3]
let result = Duplicate(nums)
console.log(result)