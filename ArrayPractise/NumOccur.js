function NumOccur(nums,x){
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === x){
            count++
        }
    }
    return count
}


let nums = [1, 3, 2, 2, 3, 5, 3, 3]
let x = 3
let result =  NumOccur(nums,x)
console.log(result)