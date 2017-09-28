function reverseWords(string) {
  //create an array of words in the string
  let wordsArr = string.split(' ')
  //create an empty array to hold reversed words
  let reverseArr = []

  wordsArr.forEach(word => {
    //create empty string to hold reversed charaters into the new sting
    let reversedWord = ''
    //go through each word backwards
    for (var 1 = word.length -1; 1 >= 0, i--) {
      //create new string by adding charaters from the original in reverse order
      reversedWord += word[i]
    }
    //add reversed word to new array
    reverseArr.push(reversedWord)
  })

  return reverseArr.join(' ')
}
