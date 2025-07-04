function merge(nums1, m, nums2, n){
    for(let i = 0; i < nums1.length ; i++){
        let str1 = String(nums1[i])
        console.log(str1)
    }
    for(let i = 0; i < nums2.length ; i++){
        let str2 = String(nums2[i])
        // console.log(str2)
    }

    let merge = str1.concat("", str2);
    console.log(merge)
}

nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
merge(nums1,m,nums2,n)