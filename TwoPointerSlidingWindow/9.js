// Longest substring with at most 2 distinct elements

let str = "abccddd"

let index = 0
let sub
let chk
let count = 0
for (let i = 1; i < str.length; i++) {
    sub = str.slice(index, i)
    chk = new Set(sub).size
    if(chk <= 2){
        while(index < sub.length){
            count++
        }
    }
}

console.log(chk,sub)
console.log(count)