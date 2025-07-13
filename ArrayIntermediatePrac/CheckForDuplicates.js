function Duplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true; 
            }
        }
    }
    return false; 
}



let nums = [1, 2, 3, 4]
let result = Duplicate(nums)
console.log(result)