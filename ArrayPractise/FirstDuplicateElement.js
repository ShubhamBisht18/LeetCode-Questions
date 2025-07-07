function FirstDuplicate(nums) {
    let ans
    for (i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] === nums[j]){
                ans = nums[i]
            }
        }
    }
    return ans
}

let nums = [6, 3, 1, 5, 3, 9]
let result = FirstDuplicate(nums)
console.log(result)