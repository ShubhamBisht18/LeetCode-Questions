// Find pivot index (LeetCode style)

function pivot(nums){
    for (let i = 0; i < nums.length; i++) {
        let left = nums.slice(0,i)
        let right = nums.slice(i+1)

        let sumLeft = 0
        for (let j = 0; j < left.length; j++) {
            sumLeft += left[j]
        }
        let sumRight = 0
        for (let j = 0; j < right.length; j++) {
            sumRight += right[j]
        }
        if(sumLeft === sumRight){
            return i
        }
    }
}

let nums = [1, 7, 3, 6, 5, 6]
let result = pivot(nums)

console.log(result)