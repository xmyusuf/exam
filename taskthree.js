var numbers = [1, 2, 0, -1, 1, -2, 3, -5, -99, 99, 4];

function func(array) {
var addition = 0;
  for (num of array) {
    if (num > 0) {
      addition = num + addition;
    }
  }
  return addition;
}

console.log(func(numbers));