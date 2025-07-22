// Find second largest element

// Optimze Approch
let arr = [3, 5, 18, 2, 10, 7, 9,25, 13, 15, 19, 30];

let max = arr[0]
let secondMax = 0
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max){
        secondMax = max
        max = arr[i]
    }else if (arr[i] > secondMax && arr[i] < max){
        secondMax = arr[i]
    }
}

console.log(secondMax)

// My Approch
// let arr = [3,5,18,2,10,7,9,13,15,19,30]
// let secondMax
// let sortArr = arr.sort((a,b) => a-b)

// for (let i = sortArr.length-2; i >= sortArr.length - 2; i--) {
//     secondMax = sortArr[i]
// }
// console.log(secondMax)


// Easy Approch
// let arr = [3, 5, 18, 2, 10, 7, 9, 13, 15, 19, 30];

// arr.sort((a, b) => a - b);
// let secondMax = arr[arr.length - 2];

// console.log(secondMax); 

