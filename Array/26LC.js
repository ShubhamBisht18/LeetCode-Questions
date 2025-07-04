function removeDuplicate(nums){
    let index = 1;
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1]){
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
}

let nums = [1,1,2];
const result = removeDuplicate(nums);
// console.log(result);          
console.log(nums.slice(0, result)); 
