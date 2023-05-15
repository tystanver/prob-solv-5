
// Write a C program to create Simple Calculator using switch case.

const calculate = (sign, num1, num2) => {
  let result;

  if (sign === '+') {
    result = num1 + num2;
  } else if (sign === '-') {
    result = num1 - num2;
  } else if (sign === '*') {
    result = num1 * num2;
  } else if (sign === '/') {
    if (num2 > 0) {
      result = num1 / num2;
    } else {
      result = "error"
    }


  }
  return result;
}
const answer = calculate('-', 12, 45);
console.log(answer)
