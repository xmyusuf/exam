var arr = [false, true, false, true, true, false, true];

function countTrues(array) {
var amount = 0;
  for (num of array) {
    if (num == true) {
      amount = num + amount;
    }
  }
  return amount;
}

console.log(countTrues(arr));