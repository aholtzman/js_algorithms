function reverseArrayInPlace(arr) {
  //go over the first half of the array
  for (let i = 0; i < arr.length / 2; i++) {
    //create temporary variable to hold element
    let tempVar = arr[i]
    //set element to counterpart
    arr[i] = arr[arr.length - 1 - i]
    //set counterpart to current element
    arr[arr.length - 1 - i] = tempVar
  }

  return arr
}
