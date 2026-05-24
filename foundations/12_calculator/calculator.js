const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const totalSum = array.reduce(((total, element) => total + element), 0);
  return totalSum;
};

const multiply = function(array) {
	const totalMultiply = array.reduce(((total, element) => total * element), 1);
  return totalMultiply;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let total = 1;
  for (let i = a; i > 0; i-- ) {
    total = total * i;
  };
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
