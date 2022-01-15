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
  } else if (operator == "*") {
    result = multiply(a, b);
    return result;
  } else if (operator == "/") {
    result = division(a, b);
    return result;
  }
}
