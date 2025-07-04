// Time limit exceed
function containsDuplicate(nums){
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                return true
            }
        }
    }
    return false
}

let nums1 = [1,2,3,1]
const result1 = containsDuplicate(nums1)
console.log(result1)

// In time limit
function containsDuplicate(nums){
    nums.sort((a,b) => a-b)
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]){
            return true
        }
    }
    return false 
}

let nums2 = [1,2,3,4]
const result2 = containsDuplicate(nums2)
console.log(result2)