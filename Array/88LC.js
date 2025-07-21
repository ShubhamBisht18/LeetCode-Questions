function merge(nums1, m, nums2, n){

    let arr = nums1.slice(0,m).concat(nums2.slice(0,n))
    let sortedArr = arr.sort((a,b) => a - b)
    return sortedArr
}

let nums1 = [1, 2, 3, 0, 0, 0]
let nums2 = [2, 5, 6]
let m = 3
let n = 3

const result = merge(nums1, m, nums2, n)
console.log(result)