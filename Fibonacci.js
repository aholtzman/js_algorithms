function fibonacci(position) {
  //if position is 1 or 2 we know the value is 1
  if (position < 3) return 1
  //build sequence until we reach position
  else return fibonacci(position - 1) + fibonacci(position - 2)
}
