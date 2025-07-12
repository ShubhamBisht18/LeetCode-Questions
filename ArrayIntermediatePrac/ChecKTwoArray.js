function chk(num1, num2) {
    let count = 0;
    let match = [];
    let used = new Array(num2.length).fill(false); // Track used elements in num2

    if (num1.length !== num2.length) {
        return false;
    }

    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            if (num1[i] === num2[j] && !used[j]) {
                count++;
                match[i] = num1[i];
                used[j] = true;
                break;
            }
        }
    }

    if (count === num1.length) {
        return true;
    }
    return false;
}


let num1 = [1, 2, 3];
let num2 = [2, 3, 1];
let result = chk(num1, num2);
console.log(result); 