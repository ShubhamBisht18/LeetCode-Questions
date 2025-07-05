function MaxNum(nums){
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] > max){
            max = nums[i]
        }
    }   return max
    
}

function MinNum(nums){
    let min = nums[0]
        for (let i = 1; i < nums.length; i++) {
            if(nums[i] < min ){
                min = nums[i]
            }
        }
        return min
    }


let nums = [6, 3, 7, 2, 10, 5, 9, 1]
let ans1 = MaxNum(nums)
console.log(ans1)
let ans2 = MinNum(nums)
console.log(ans2)