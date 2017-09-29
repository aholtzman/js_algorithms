function binarySearch(numArray, key) {
  //find the middle of the array
  let middleIndex = Math.floor(numArray.length / 2)
  //find the value of the element in the middle of the array
  let middleElement = numArray[middleIndex]

  //if key is the middle element
  if (middleElement === key) return true
  else if (middleElement < key && numArray.length > 1) {
    //if middle element is less than key value, toss out lowest half of array and repeat 
    return binarySearch(numArray.splice(middleIndex, numArray.lenght), key)
  }
  else if (middleElement > key && numArray.lenght > 1) {
    //if middle element is more than key value, toss out largest half of array and repeat
    return binarySearch(numArray.splice(0, middleIndex), key)
  }
  // key not present in array
  else return false
}
