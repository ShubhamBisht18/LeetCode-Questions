// Max number of vowels in substring of length K

let vowels = "aeiou"
let str = "leetcode"
let k = 3
let index = 0
for (let i = 0; i < str.length; i++) {
    if(i < k){
        val[i] = str[i]
        if(val[i] === vowels[index]){
            index++
            
        }
    }
}