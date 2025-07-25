// Count subarrays with even sum

let arr = [4, 1, 2, 3, 6];

let count = 0
for (let i = 0; i < arr.length; i++) {
    let sum = 0
    for (let j = i; j < arr.length; j++) {
        sum+= arr[j]
        if(sum%2 === 0){
            count++
        }
    }
}
console.log(count)