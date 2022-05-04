function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  // refactor...
  if (b === 0) {
    return null;
  }
  // ... refactor
  return a / b;
}

function cylinderVol(r, a) {
  // refactor...
  return Math.ceil(Math.PI * r * r * a);
  // ... refactor
}

module.exports = {
  sum, multiply, divide, cylinderVol,
};
