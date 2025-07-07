function moveZeros(nums){
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if( nums[i] !== 0){
            arr.push(nums[i])
        }
    }
    let i = 0
    let zerosLength = nums.length - arr.length
    while(i < zerosLength){
        arr.push(0)
        i++
    }
    return arr
}

let nums = [0,1,0,3,12]
let result = moveZeros(nums)
console.log(result)