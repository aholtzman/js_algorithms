function diffArray(arr1, arr2) {
  //create empty array to hold found values
  var newArr = [];
  //put the two arrays together
  var oneArr = arr1.concat(arr2);


  for (var i = 0; i < oneArr.length; i++) {
    //check if value from the long array is not in either original arrays
    if (arr1.indexOf(oneArr[i]) === -1 || arr2.indexOf(oneArr[i]) === -1) {
      //add to new array if value is in only one of the short arrays
      newArr.push(oneArr[i]);
    }
  }

  return newArr;
