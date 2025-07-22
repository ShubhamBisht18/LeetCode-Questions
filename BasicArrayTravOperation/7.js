// Count number of positive and negative numbers

let arr = [3,-1,5,-1,9,-3,-6,-9]

countNeg = 0
countPos = 0
for (let i = 0; i < arr.length; i++) {
    if(arr[i] < 0){
        countNeg++
    }
    else{
        countPos++
    }
}

console.log(countPos)
console.log(countNeg)