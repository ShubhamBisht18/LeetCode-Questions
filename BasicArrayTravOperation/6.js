// Count even and odd numbers

let arr = [3,5,18,2,10,7,9,1]
let countEven = 0
let countOdd = 0
for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0){
        countEven++
    }
    else{
        countOdd++
    }
}

console.log(countEven)
console.log(countOdd)