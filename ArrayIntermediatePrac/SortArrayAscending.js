function SortArray(nums) {
    if (nums.length <= 1) {
        return nums;
    }

    const mid = Math.floor(nums.length / 2);
    console.log("mid: ",mid)
    const left = SortArray(nums.slice(0, mid));
    console.log("left: ",left)
    const right = SortArray(nums.slice(mid));
    console.log("right: ",right)
    
    console.log("left,right:",left,right)
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            console.log(result)
            i++;
        } else {
            result.push(right[j]);
            console.log(result)
            j++;
        }
    }
    
    while (i < left.length) {
        result.push(left[i]);
        console.log(result)
        i++;
    }
    
    while (j < right.length) {
        result.push(right[j]);
        console.log(result)
        j++;
    }

    return result;
}

let nums = [5, 2, 8, 1];
let result = SortArray(nums);
console.log(result); 
