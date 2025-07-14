function FindDuplicate(nums){
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
    }
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            arr.push(nums[i])
        }
    }
    return arr

}

let nums = [4,3,2,7,8,2,3,1,7]
let result = FindDuplicate(nums)
console.log(result)