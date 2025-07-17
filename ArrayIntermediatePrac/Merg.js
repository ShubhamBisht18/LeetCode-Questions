function MergeSort(nums){
    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length/2)
    let left = MergeSort(nums.slice(0,mid))
    let right = MergeSort(nums.slice(mid))

    return merge(left , right)
}

function merge(left, right){
    let i = 0
    let j = 0
    let result = []

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            i++
        }
        else{
            result.push(right[j])
            j++
        }
    }

    while (i < left.length){
        result.push(left[i])
        i++
    }
    while (j < right.length){
        result.push(right[j])
        j++
    }
    return result
}

let num1 = [1,3,5] 
let num2 = [2,4,6]
let sort = num1.concat(num2)
let result = MergeSort(sort)
console.log(result)