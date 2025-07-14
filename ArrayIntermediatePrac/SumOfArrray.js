function SumOfPair(nums){
    let pairs = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
           if(k === nums[i] + nums[j]){
                pairs.push([nums[i], nums[j]])
           }
        }
    }
    return pairs
}

let nums = [1, 2, 3, 4]
let k = 5 
let result = SumOfPair(nums, k)
console.log(result)