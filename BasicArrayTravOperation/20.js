// Find first duplicate element

let arr = [2, 5, 6, 5, 3]
for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++
        }
    }
    if (count > 1) {
        console.log(arr[i], count)
        break
    }
}