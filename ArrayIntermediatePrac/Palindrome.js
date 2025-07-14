function Palindrome(nums){
    let arrRev = []
    for (let i = nums.length - 1; i >= 0; i--) {
        arrRev.push(nums[i])
    }
    return nums.join() == arrRev.join() ? true : false
}

let nums = [1, 2, 3, 2, 1]
let result = Palindrome(nums)
console.log(result)