function merge(nums1, nums2){
    let result = nums1.concat(nums2)
    return result
}
// function merge(nums1, nums2){
//     let result = [...nums1,...nums2]
//     return result
// }


// function merge(nums1, nums2){
//     let arr = []
//     for (let i = 0; i < nums1.length; i++) {
//         arr.push(nums1[i])
//     }
//     for (let i = 0; i < nums2.length; i++) {
//         arr.push(nums2[i])
//     }

//     return arr
// }

let nums1 = [1,2,3]
let nums2 = [4,5,6]
let result = merge(nums1,nums2)
console.log(result)