function fiboMemo(index, cache) {
  //define cache
  cache = cache || []
  //base case
  if (cache[index]) return cache[index]
  else {
    //for first two elements wich are both 1
    if (index < 3) return 1
    else {
      //calculate and store numbers up to the index
      cache[index] = fiboMemo(index -1, cache) + fiboMemo(index - 2, cache)
    }
  }
  return cache[index]
}
