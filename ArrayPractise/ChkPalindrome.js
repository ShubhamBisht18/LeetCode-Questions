function Palindrome(nums) {
    let rev = []
    let index = 0
    for (let i = nums.length - 1; i >= 0; i--) {
        rev[index] = nums[i]
        index++
    }
    for (let i = 0; i < nums.length; i++) {
        if (rev[i] !== nums[i]) {
            return "Not a Palindrome"
        }
    }
    return "Palindrome"
}

let nums = [1, 3, 2, 3, 1]
let result = Palindrome(nums)
console.log(result)

