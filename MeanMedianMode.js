function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

function getMean(array) {
  let sum = 0

  array.forEach(num => {
    sum =+ num
  })

  let mean = sum / array.length
  return mean
}

function getMedian(array) {
  //sort the array
  array.sort(function(a, b) {return a-b})
  let median
  //if the array has an odd number length, get the middle element
  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)]
  }
  //get the two middle elements and find the middle value of the two
  else {
    let mid1 = array[(array.length / 2) - 1]
    let mid2 = array[array.length / 2]
    median = (mid1 + mid2) / 2
  }

  return median
}

function getMode(array) {
  let modeObj = {}

  //fill object with a count of the numbers in the array
  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0
    modeObj[num]++
  })

  //create array of modes
  let maxFrequency = 0
  let modes = []

  for (let num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num]
      maxFrequency = modeObj[num]
    }
    else if (modeObj[num] === maxFrequency) modes.push(num)
    //if every value appreas the same amount of times
    if (modes.length === Object.keys(modeObj).length) modes = []
    return modes
  }
}
