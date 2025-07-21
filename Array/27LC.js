function removeElement(nums,k){
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== k){
            nums[index] = nums[i]
            index++
        }
    }
    return index
}
let nums = [2,3,3,2]
let k = 2
let result = removeElement(nums,k)
console.log(result)