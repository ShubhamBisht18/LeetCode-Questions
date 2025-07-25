// Longest subarray with sum K

let arr = [1, 2, 3, 1, 1, 1, 1];
let K = 6;
let prevCount = 0
for (let i = 0; i < arr.length; i++) {
    let count =0
    let sum = 0
    for (let j = i; j < arr.length; j++) {
        sum+= arr[j]
        count++
        if(sum === K && count > prevCount){
            prevCount = count
        }
    }
}
console.log(prevCount)