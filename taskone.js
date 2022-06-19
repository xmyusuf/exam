var numbers = [1, 3, 0, 5, 0, 7, 0];

function func(array) {
var string1 = "";
var string2 = "";
  for (num of array) {
    if (num == 0) {
      string1 += num;
    } else {
      string2 += num;
    }
  }
  return string2 + string1;
}

console.log(func(numbers));