function LongestSubArray(nums, k) {
    let result = []
    let maxLen = 0
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            if (sum === k) {
                let currentLen = j - i + 1;
                console.log("cureent Len: ",currentLen)
                if (currentLen > maxLen) {
                    maxLen = currentLen;
                    result = [[i, j]]; 
                }
            }
        }
    }
    return result
}


let nums = [1, 1, 1, 2, 3, 1, 1]
let k = 5
let result = LongestSubArray(nums, k)
console.log(result)