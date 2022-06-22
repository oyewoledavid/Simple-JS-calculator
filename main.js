let firstNumber = parseInt(prompt("Enter first number:"));
let operator = prompt("Enter an Opeator +,-,*,/");
let secondNumber = parseInt(prompt("Enter second number:"));

let result;
if (operator == "+") {
  result = firstNumber + secondNumber;
} else if (operator == "-") {
  result = firstNumber - secondNumber;
} else if (operator == "*") {
  result = firstNumber * secondNumber;
} else if (operator == "/") {
  result = firstNumber / secondNumber;
}
alert("Answer:" + " " + result);
