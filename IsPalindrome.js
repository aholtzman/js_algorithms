function isPalindrome(string) {
  //make all characters lowercase for easier comparison
  string = string.toLowerCase()
  //create array of characters from the string
  let charArray = string.split('')
  //create an array of just letters for comparison
  let validChars = 'abcdefghijklmnopqrstuvwxyz'.split('')
  //create empty array to hold filtered characters
  let lettersArray = []

  charArray.forEach(char => {
    //if the character is on both arrays. add to the holder array
    if (validChars.indexOf(char) > -1) lettersArray.push(char)
  })

  return lettersArray.join('') === lettersArray.reverse().join('')
}
