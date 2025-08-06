// Two sum (sorted array version)

let arr =  [1, 3, 4, 5, 7, 10, 11]
let target = 9

let i = 0
let j = arr.length - 1
while(i < j){
    sum = arr[i] + arr[j]
    if(sum === target){
        console.log([arr[i], arr[j]])
        break
    }else{
        if(sum > target){
            j--
        }
        if(sum < target){
            i++
        }
    }
}