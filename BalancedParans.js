function balancedParans(string) {

  return !string.split('').reduce(function(previous, char) {
    //catch if string starts with closeing paran
    if (previous < 0) { return previous }
    //increment counter by 1 for each opening paran
    if (char === '(') { return previous++ }
    //decrement counter by 1 for each closing paran
    if (char === ')') { return previous-- }
    
    return previous
  }, 0)
}
