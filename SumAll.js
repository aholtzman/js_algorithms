function sumAll(arr) {
  //sort array
  arr = arr.sort(function(a, b) {
    return a-b;
  });
  //find first number
  var first = arr[0];
  //find last number
  var last = arr[1];
  //create empty result
  var result = 0;

  //add one for every number from first to last to the result
  for (var i = first; i <= last; i++) {
    result += i;
  }

  return result;
}
