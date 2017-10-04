function caesarCipher(str, num) {
  //reduce large numbers to work quickly
  num = num % 26
  //make the string lower case to optimize comparisons
  let phrase = str.toLowerCase()
  //make array of lowecase letters to compare/shift
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  //make string to hold shifted charaters
  let newString = ''

  for (let i = 0; i < phrase.length; i++) {
    //hold the character
    let currentLetter = phrase[i]
    //in case the character is a space
    if (currentLetter === ' ') {
      newString += currentLetter
    }
    //set index of character
    let currentIndex = alphabet.indexOf(currentLetter)
    //set shifted character index
    let newIndex = currentIndex + num

    if (newIndex > 25) newIndex = newIndex - 26
    if (newIndex < 0) newIndex = 26 + newIndex
    //set character into new string to upper case if original was so
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase()
    }//set character into new string
    else newString += alphabet[newIndex]
  }

  return newString
}
