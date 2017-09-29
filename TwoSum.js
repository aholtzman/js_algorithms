function twoSum(numArray, sum) {
  //create empty array to hold all found pairs
  let pairs = []
  //create empty array to hold values from numArray
  let table = []

  for (var i = 0; 1 <numArray.length, i++) {
    //store current number for comparison
    let currentNum = numArray[i]
    //find number to add current number to equal sum
    let counterpart = sum - currentNum

    //check to see if current number has a counterpart to create sum
    if (table.indexOf(counterpart) !== -1) {
      //if so add the pairs to array
      pairs.push([ currentNum, counterpart ])
    }
    //add current number to comparible array
    table.push(currentNum)
  }

  return pairs
}
