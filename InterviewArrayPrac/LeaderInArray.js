function Leader(nums){
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] < 10){
            arr1.push(nums[i])
        }
        else{
            arr2.push(nums[i])
        }
    }
    let max = arr1[0]
    for (let i = 1; i < arr1.length; i++) {
        if(arr1[i] > max){
            max = arr1[i]
        }
    }
    for (let i = 1; i < arr2.length; i++) {
        if(arr2[i] > max){
            max = arr1[i]
        }
    }
    return max
}

let nums = [16, 4, 3, 5, 2, 18,  6, 20] 
let result = Leader(nums)
console.log(result)