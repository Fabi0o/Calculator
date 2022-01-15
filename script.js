//basic mathematic operations for calculator to work
function add(a, b) {
  let sum = a + b;
  return sum;
}
function substract(a, b) {
  let difference = a - b;
  return difference;
}
function multiply(a, b) {
  let product = a * b;
  return product;
}
function division(a, b) {
  let fraction = a / b;
  return fraction;
}
//function that will be wired to html, takes operator and 2 numbers
//and then calls one of the basic functions
function operate(operator, a, b) {
  let result;
  if (operator == "+") {
    result = add(a, b);
    return result;
  } else if (operator == "-") {
    result = substract(a, b);
    return result;
  } else if (operator == "x") {
    result = multiply(a, b);
    return result;
  } else if (operator == "÷") {
    result = division(a, b);
    return result;
  }
}
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clearBtn");
const numButtons = document.querySelectorAll(".numBtn");
const dot = document.querySelector(".dot");
const currentOperand = document.querySelector(".currentOperand");
const previousOperand = document.querySelector(".previousOperand");
const equalBtn = document.querySelector("#equal");

function appendCurrentNumber(num) {
  currentOperand.textContent += num;
}

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let num = button.textContent;
    appendCurrentNumber(num);
  });
});

clear.addEventListener("click", () => {
  currentOperand.textContent = "";
  previousOperand.textContent = "";
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    let num = button.textContent;
    if (currentOperand.textContent != "" && previousOperand.textContent != "") {
      gettingNumbersAndOperator();
      previousOperand.textContent += num;
    } else if (currentOperand.textContent != "") {
      appendCurrentNumber(num);
      previousOperand.textContent = currentOperand.textContent;
      currentOperand.textContent = "";
    }
  });
});
function gettingNumbersAndOperator() {
  let operator = previousOperand.textContent.charAt(
    previousOperand.textContent.length - 1
  );
  let num1 = parseInt(
    previousOperand.textContent.substring(
      0,
      previousOperand.textContent.length - 1
    ),
    10
  );
  let num2 = parseInt(currentOperand.textContent, 10);
  previousOperand.textContent = operate(operator, num1, num2);
  currentOperand.textContent = "";
}
equalBtn.addEventListener("click", gettingNumbersAndOperator);
