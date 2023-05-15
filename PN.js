// Write a C program to check whether a number is positive, negative or zero using switch case.

let num = 2;
const isPN = (num) => {
    let result;
    if (num > 0) {
        result = 'this num is positive'
    }
    else if (num < 0) {
        result = "this num is negetive"
    }
    else {
        result = 'this is zero'
    }
    return result;
}
const ans = isPN(num);
console.log(ans)