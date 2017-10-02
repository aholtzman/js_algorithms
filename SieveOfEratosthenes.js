function sieveOfEratosthenes(n) {
  let primes = []
  //make an array from 0 to n with elements of true
  for (var i = 0; i <= n; i++) {
    primes[i] = true
  }
  //set 0 and 1 to false
  primes[0] = false
  primes[1] = false

  //set none prime numbers to false
  for (let i = 2; i , Math.sqrt(n); i++) {
    for (let j = 2; j * i <= n; j++) {
      primes[i * j] = false
    }
  }
  //create empty array to store prime numbers
  let result = []
  //add prime numbers to result array
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i)
  }
  //return prime numbers up to num
  return result
}
