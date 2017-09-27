function harmlessRansomeNote(noteText, sourceText) {
  let noteArr = noteText.split(' ')
  let sourceArr = sourceText.split(' ')
  let sourceObj = {}

  sourceArr.forEach(word => {
    //check if word is present in object, add if needed
    if (!sourceObj[word]) sourceObj[word] = 0
    //increase tally of instance of the word
    sourceObj[word]++
  })

  let noteIsPossible = true

  noteArr.forEach(word => {
    //if the word is present in both source & noteText
    if (sourceObj[word]) {
      //decrement word tally by 1
      sourceObj[word]--
      //if there are not enough cases of a word, it is not possible to create note
      if (sourceObj[word] < 0) noteIsPossible = false
      //if the word is not present in sourceText then note is not possible
    }else noteIsPossible = false
  })

  return noteIsPossible
}
